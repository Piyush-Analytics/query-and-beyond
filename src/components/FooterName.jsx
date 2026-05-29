import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function FooterName() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 30, mass: 0.5 });

  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
  };

  // PiYuSh — alternating case letters with individual styling
  const letters = [
    { char: "P", upper: true },
    { char: "i", upper: false },
    { char: "Y", upper: true },
    { char: "u", upper: false },
    { char: "S", upper: true },
    { char: "h", upper: false },
  ];

  return (
    <div style={{ width: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>

      {/* Row 1 — Name half cut off */}
      <div
        ref={containerRef}
        style={{
          width: "100%",
          overflow: "hidden",
          cursor: "crosshair",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          style={{
            display: "flex",
            alignItems: "baseline",
            transform: "translateY(45%)",
            userSelect: "none",
            lineHeight: 1,
          }}
        >
          {letters.map((l, i) => (
            <motion.span
              key={i}
              style={{
                fontSize: "clamp(80px, 18vw, 220px)",
                fontWeight: 900,
                fontFamily: "'IBM Plex Mono', monospace",
                letterSpacing: "-0.02em",
                color: "currentColor",
                opacity: l.upper ? 0.85 : 0.25,
                display: "inline-block",
                lineHeight: 1,
              }}
            >
              {l.char}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Row 2 — Scroll to top */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          padding: "12px 24px",
          borderTop: "1px solid var(--border-color)",
        }}
      >
        <button
          onClick={scrollToTop}
          title="Back to top"
          style={{
            width: "36px",
            height: "36px",
            border: "1px solid var(--border-color)",
            background: "transparent",
            color: "var(--text-color)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4px",
            opacity: 0.6,
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = "1"}
          onMouseLeave={e => e.currentTarget.style.opacity = "0.6"}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>

    </div>
  );
}
