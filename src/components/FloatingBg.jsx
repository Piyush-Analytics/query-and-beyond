import { useEffect, useRef } from "react";

const chars = [
  'SELECT', 'FROM', 'WHERE', 'JOIN', 'GROUP BY', 'ORDER BY', 'HAVING',
  'SUM()', 'AVG()', 'COUNT(*)', 'MAX()', 'MIN()', 'DISTINCT',
  'df.head()', 'import pandas', 'plt.show()', 'numpy', 'matplotlib',
  'NULL', 'INT', 'VARCHAR', 'FLOAT', 'BOOLEAN', 'DATE', 'INDEX',
  '{}', '[]', '=>', '::', '==', '!=', '&&', '||',
  'Python', 'SQL', 'ETL', 'KPI', 'API', 'CSV', 'JSON',
  'print()', 'def ', 'return', 'for i in', 'lambda', 'import',
  '%', '*', '#', '@', '<<', '>>', '+=', '->', '<>',
];

// Planet SVGs
const planets = [
  // Mercury — small grey
  `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <circle cx="10" cy="10" r="8" fill="rgba(180,180,180,0.5)" />
    <circle cx="7" cy="7" r="2" fill="rgba(150,150,150,0.4)" />
  </svg>`,

  // Venus — yellowish
  `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
    <circle cx="14" cy="14" r="11" fill="rgba(230,200,100,0.5)" />
    <ellipse cx="14" cy="14" rx="11" ry="8" fill="rgba(240,210,120,0.3)" />
  </svg>`,

  // Earth — blue/green
  `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
    <circle cx="15" cy="15" r="12" fill="rgba(50,130,220,0.55)" />
    <ellipse cx="12" cy="12" rx="5" ry="4" fill="rgba(60,160,80,0.5)" />
    <ellipse cx="18" cy="18" rx="4" ry="3" fill="rgba(60,160,80,0.45)" />
    <circle cx="15" cy="15" r="12" fill="rgba(100,180,255,0.1)" />
  </svg>`,

  // Mars — red
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" fill="rgba(200,80,50,0.55)" />
    <circle cx="9" cy="9" r="3" fill="rgba(180,60,40,0.4)" />
  </svg>`,

  // Jupiter — large striped
  `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="22" fill="rgba(210,170,120,0.5)" />
    <ellipse cx="25" cy="18" rx="22" ry="4" fill="rgba(180,130,80,0.4)" />
    <ellipse cx="25" cy="25" rx="22" ry="3" fill="rgba(160,110,70,0.35)" />
    <ellipse cx="25" cy="32" rx="22" ry="4" fill="rgba(180,130,80,0.4)" />
    <ellipse cx="18" cy="27" rx="5" ry="3" fill="rgba(200,100,80,0.5)" />
  </svg>`,

  // Saturn — with rings
  `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="50" viewBox="0 0 70 50">
    <ellipse cx="35" cy="30" rx="28" ry="5" fill="rgba(200,170,100,0.25)" />
    <ellipse cx="35" cy="30" rx="22" ry="4" fill="rgba(200,170,100,0.2)" />
    <circle cx="35" cy="25" r="16" fill="rgba(210,180,120,0.55)" />
    <ellipse cx="35" cy="25" rx="16" ry="5" fill="rgba(180,150,90,0.35)" />
    <ellipse cx="35" cy="30" rx="28" ry="5" fill="none" stroke="rgba(200,170,100,0.4)" stroke-width="2" />
    <ellipse cx="35" cy="30" rx="22" ry="4" fill="none" stroke="rgba(220,190,120,0.3)" stroke-width="1.5" />
  </svg>`,

  // Uranus — light blue
  `<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">
    <circle cx="19" cy="19" r="16" fill="rgba(100,210,220,0.45)" />
    <ellipse cx="19" cy="19" rx="16" ry="6" fill="none" stroke="rgba(150,230,240,0.35)" stroke-width="2" />
  </svg>`,

  // Neptune — deep blue
  `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
    <circle cx="17" cy="17" r="14" fill="rgba(50,80,200,0.5)" />
    <ellipse cx="13" cy="13" rx="4" ry="3" fill="rgba(80,120,240,0.4)" />
  </svg>`,

  // Milky Way galaxy
  `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
    <ellipse cx="40" cy="40" rx="38" ry="15" fill="rgba(180,160,255,0.12)" />
    <ellipse cx="40" cy="40" rx="28" ry="10" fill="rgba(200,180,255,0.15)" />
    <ellipse cx="40" cy="40" rx="18" ry="7" fill="rgba(220,200,255,0.2)" />
    <ellipse cx="40" cy="40" rx="10" ry="5" fill="rgba(240,220,255,0.3)" />
    <circle cx="40" cy="40" r="4" fill="rgba(255,240,255,0.5)" />
    <circle cx="20" cy="35" r="1" fill="rgba(255,255,255,0.4)" />
    <circle cx="60" cy="44" r="1" fill="rgba(255,255,255,0.4)" />
    <circle cx="30" cy="30" r="0.8" fill="rgba(255,255,255,0.3)" />
    <circle cx="55" cy="32" r="0.8" fill="rgba(255,255,255,0.3)" />
    <circle cx="25" cy="48" r="0.8" fill="rgba(255,255,255,0.3)" />
    <circle cx="62" cy="38" r="0.8" fill="rgba(255,255,255,0.3)" />
  </svg>`,

  // Shooting star
  `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="12" viewBox="0 0 60 12">
    <circle cx="55" cy="6" r="3" fill="rgba(255,255,200,0.9)" />
    <line x1="0" y1="6" x2="52" y2="6" stroke="rgba(255,255,200,0.5)" stroke-width="1.5" />
    <line x1="10" y1="6" x2="52" y2="6" stroke="rgba(255,255,255,0.7)" stroke-width="1" />
  </svg>`,

  // Star cluster
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.8)" />
    <circle cx="10" cy="10" r="1.5" fill="rgba(200,220,255,0.7)" />
    <circle cx="30" cy="12" r="1" fill="rgba(255,200,200,0.7)" />
    <circle cx="8" cy="28" r="1.5" fill="rgba(200,255,200,0.7)" />
    <circle cx="32" cy="30" r="1" fill="rgba(255,255,200,0.7)" />
    <circle cx="20" cy="5" r="1" fill="rgba(255,255,255,0.5)" />
    <circle cx="35" cy="20" r="1" fill="rgba(255,255,255,0.5)" />
  </svg>`,
];

const FloatingBg = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Spawn text chars
    const spawnChar = () => {
      const el = document.createElement('div');
      el.textContent = chars[Math.floor(Math.random() * chars.length)];
      el.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        font-family: monospace;
        font-size: ${10 + Math.random() * 10}px;
        color: ${Math.random() > 0.7 ? 'rgba(100,150,255,0.45)' : 'rgba(255,255,255,0.25)'};
        pointer-events: none;
        z-index: 0;
        animation: floatUp ${10 + Math.random() * 15}s linear forwards;
        white-space: nowrap;
      `;
      container.appendChild(el);
      setTimeout(() => el.remove(), 25000);
    };

    // Spawn planets
    const spawnPlanet = () => {
      const el = document.createElement('div');
      const planetSvg = planets[Math.floor(Math.random() * planets.length)];
      el.innerHTML = planetSvg;
      const duration = 20 + Math.random() * 30;
      const size = 0.6 + Math.random() * 1.2;
      el.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        pointer-events: none;
        z-index: 0;
        transform: scale(${size});
        animation: floatUpSlow ${duration}s linear forwards;
        opacity: 0;
      `;
      container.appendChild(el);
      setTimeout(() => el.remove(), duration * 1000);
    };

    // Initial spawn
    for (let i = 0; i < 30; i++) {
      setTimeout(spawnChar, Math.random() * 5000);
    }
    for (let i = 0; i < 5; i++) {
      setTimeout(spawnPlanet, Math.random() * 8000);
    }

    const charInterval = setInterval(spawnChar, 800);
    const planetInterval = setInterval(spawnPlanet, 4000);

    return () => {
      clearInterval(charInterval);
      clearInterval(planetInterval);
      container.innerHTML = '';
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0) rotate(0deg); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.8; }
          100% { transform: translateY(-110vh) rotate(20deg); opacity: 0; }
        }
        @keyframes floatUpSlow {
          0%   { transform: translateY(0) rotate(0deg) scale(var(--s, 1)); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.7; }
          100% { transform: translateY(-110vh) rotate(15deg) scale(var(--s, 1)); opacity: 0; }
        }
      `}</style>
      <div ref={containerRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }} />
    </>
  );
};

export default FloatingBg;
