import { useState, useEffect, useRef } from "react";
import { piyushNameSound } from "../lib/piyushNameSound";

let audioCtx = null;
let audioBuffer = null;

const getCtx = () => {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
};

// Preload audio buffer as soon as module loads
const preload = async () => {
  try {
    const ctx = getCtx();
    const base64 = piyushNameSound.dataUri.split(',')[1];
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    audioBuffer = await ctx.decodeAudioData(bytes.buffer);
  } catch (e) {}
};

preload();

export function PronounceMyName() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = async () => {
    try {
      const ctx = getCtx();
      // Resume immediately on click (removes suspended state instantly)
      if (ctx.state === "suspended") await ctx.resume();

      // If buffer not ready yet, decode now
      if (!audioBuffer) await preload();
      if (!audioBuffer) return;

      const source = ctx.createBufferSource();
      const gain = ctx.createGain();
      source.buffer = audioBuffer;
      gain.gain.value = 1;
      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(0);

      setIsPlaying(true);
      source.onended = () => setIsPlaying(false);
    } catch (e) {}
  };

  return (
    <button
      onClick={handleClick}
      title="Pronounce my name"
      style={{ color: 'var(--text-color)', opacity: 0.6 }}
      className="hover:opacity-100 transition-opacity ml-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18" height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        {isPlaying ? (
          <>
            <line x1="15.54" y1="8.46" x2="19.07" y2="4.93" />
            <line x1="19.07" y1="8.46" x2="15.54" y2="4.93" />
          </>
        ) : (
          <>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          </>
        )}
      </svg>
    </button>
  );
}
