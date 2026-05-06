let audioContext = null;
const bufferCache = new Map();

export function getAudioContext() {
  if (!audioContext) audioContext = new AudioContext();
  return audioContext;
}

export async function decodeAudioData(dataUri) {
  if (bufferCache.has(dataUri)) return bufferCache.get(dataUri);
  const ctx = getAudioContext();
  const base64 = dataUri.split(",")[1];
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  const buffer = await ctx.decodeAudioData(bytes.buffer.slice(0));
  bufferCache.set(dataUri, buffer);
  return buffer;
}