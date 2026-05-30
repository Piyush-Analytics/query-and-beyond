import { motion, useMotionValue, useSpring } from "framer-motion";

// Larger grid unit for bigger letters like chanhdai
const G = 48;
const VIEWBOX_WIDTH = 1800;
const DEFAULT_GRADIENT_X = 900;

function rect(x, y, w, h) {
  return `M${x} ${y} H${x + w*G} V${y + h*G} H${x} Z `;
}

// Each letter slot = 5 cols * 48 = 240px wide
// Gap between letters = 80px
// Slot = 320px
// 6 letters * 320 = 1920 — fits in 1800 with slight compression

const SLOT = 300;

// P — uppercase full height 7 rows
const P_x = 0;
const P = [
  rect(P_x,          1,  5,  1),
  rect(P_x,          1,  1,  7),
  rect(P_x + 4*G,    1,  1,  3),
  rect(P_x,       3*G+1,  5,  1),
];

// i — lowercase (dot + short body)
const I_x = SLOT;
const I = [
  rect(I_x + G,    G+1,   1,  1),
  rect(I_x + G,  2*G+1,   1,  5),
];

// Y — uppercase full height
const Y_x = SLOT * 2;
const Y = [
  rect(Y_x,          1,  1,  4),
  rect(Y_x + 4*G,    1,  1,  4),
  rect(Y_x + G,   3*G+1,  1,  1),
  rect(Y_x + 3*G, 3*G+1,  1,  1),
  rect(Y_x + 2*G, 3*G+1,  1,  4),
];

// u — lowercase (no top, starts row 3)
const U_x = SLOT * 3;
const U = [
  rect(U_x,        2*G+1,  1,  4),
  rect(U_x + 4*G,  2*G+1,  1,  4),
  rect(U_x,        6*G+1,  5,  1),
];

// S — uppercase full height
const S_x = SLOT * 4;
const S = [
  rect(S_x,          1,  5,  1),
  rect(S_x,          1,  1,  3),
  rect(S_x,       3*G+1,  5,  1),
  rect(S_x + 4*G, 3*G+1,  1,  3),
  rect(S_x,       6*G+1,  5,  1),
];

// h — lowercase (left bar full, right starts row 3)
const H_x = SLOT * 5;
const H = [
  rect(H_x,          1,  1,  7),
  rect(H_x + 4*G, 3*G+1,  1,  4),
  rect(H_x,       3*G+1,  5,  1),
];

const allFilled = [...P, ...I, ...Y, ...U, ...S, ...H].join(" ");

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function FooterName() {
  const gradientX1Raw = useMotionValue(DEFAULT_GRADIENT_X);
  const gradientX1 = useSpring(gradientX1Raw, {
    stiffness: 200, damping: 30, mass: 0.5,
  });

  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - r.left;
    const normalizedX = (mouseX / r.width) * VIEWBOX_WIDTH;
    gradientX1Raw.set(Math.max(0, Math.min(VIEWBOX_WIDTH, normalizedX)));
  };

  const handleMouseLeave = () => {
    gradientX1Raw.set(DEFAULT_GRADIENT_X);
  };

  return (
    <div style={{ width: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>

      {/* Row 1 — Name half cut off */}
      <div
        style={{ width: "100%", overflow: "hidden", cursor: "crosshair" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          style={{ width: "100%", height: "auto", display: "block", transform: "translateY(50%)" }}
          viewBox={`0 0 ${VIEWBOX_WIDTH} 340`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={allFilled}
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.04"
          />
          <path d={allFilled} fill="url(#piyush_grad)" />
          <defs>
            <motion.linearGradient
              id="piyush_grad"
              x1={gradientX1}
              y1="1"
              x2="1000"
              y2="339"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.3" stopColor="currentColor" stopOpacity="0" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.85" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>

      {/* Row 2 — Scroll to top */}
      <div style={{
        width: "100%", display: "flex", justifyContent: "flex-end",
        padding: "12px 24px", borderTop: "1px solid var(--border-color)",
      }}>
        <button
          onClick={scrollToTop}
          title="Back to top"
          style={{
            width: "36px", height: "36px",
            border: "1px solid var(--border-color)",
            background: "transparent", color: "var(--text-color)",
            cursor: "pointer", display: "flex", alignItems: "center",
            justifyContent: "center", borderRadius: "4px",
            opacity: 0.6, transition: "opacity 0.2s ease",
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
