import { useCallback, useEffect, useRef, useState } from "react";
import { decodeAudioData, getAudioContext } from "../lib/soundEngine";

export function useSound(sound, options = {}) {
  const { volume = 1, playbackRate = 1 } = options;
  const bufferRef = useRef(null);
  const sourceRef = useRef(null);

  useEffect(() => {
    decodeAudioData(sound.dataUri).then((buffer) => {
      bufferRef.current = buffer;
    });
  }, [sound.dataUri]);

  const play = useCallback(() => {
    if (!bufferRef.current) return;
    const ctx = getAudioContext();
    if (ctx.state === "suspended") ctx.resume();
    const source = ctx.createBufferSource();
    const gain = ctx.createGain();
    source.buffer = bufferRef.current;
    source.playbackRate.value = playbackRate;
    gain.gain.value = volume;
    source.connect(gain);
    gain.connect(ctx.destination);
    source.start(0);
    sourceRef.current = source;
  }, [volume, playbackRate]);

  return [play];
}