import { motion, useMotionValue, useSpring } from "framer-motion";

const VIEWBOX_WIDTH = 1410;
const DEFAULT_GRADIENT_X = 705;

const G = 32;

function rect(x, y, w, h) {
  const x1 = x;
  const y1 = y;
  const x2 = x + w * G;
  const y2 = y + h * G;
  return `M${x1} ${y1} H${x2} V${y2} H${x1} Z `;
}

// Letter slot = 5 cols * 32 = 160px + 75px gap = 235px per letter
// 6 * 235 = 1410 — perfect fit!
const S = 235; // slot size

// P
const P_x = 0;
const P = [
  rect(P_x,         1, 5, 1), // top bar
  rect(P_x,         1, 1, 7), // left bar
  rect(P_x + 4*G,   1, 1, 3), // right bar top
  rect(P_x,     3*G+1, 5, 1), // middle bar
];

// I
const I_x = S;
const I = [
  rect(I_x,         1, 3, 1), // top bar
  rect(I_x,     6*G+1, 3, 1), // bottom bar
  rect(I_x + G,     1, 1, 7), // center bar
];

// Y
const Y_x = S * 2;
const Y = [
  rect(Y_x,         1, 1, 4), // left top
  rect(Y_x + 4*G,   1, 1, 4), // right top
  rect(Y_x + G, 3*G+1, 1, 1), // join left
  rect(Y_x + 3*G,3*G+1,1, 1), // join right
  rect(Y_x + 2*G,3*G+1,1, 4), // stem
];

// U
const U_x = S * 3;
const U = [
  rect(U_x,         1, 1, 6), // left bar
  rect(U_x + 4*G,   1, 1, 6), // right bar
  rect(U_x,     6*G+1, 5, 1), // bottom bar
];

// S
const S_x = S * 4;
const Sl = [
  rect(S_x,         1, 5, 1), // top bar
  rect(S_x,         1, 1, 3), // top-left bar
  rect(S_x,     3*G+1, 5, 1), // middle bar
  rect(S_x + 4*G,3*G+1,1, 3), // bottom-right bar
  rect(S_x,     6*G+1, 5, 1), // bottom bar
];

// H
const H_x = S * 5;
const H = [
  rect(H_x,         1, 1, 7), // left bar
  rect(H_x + 4*G,   1, 1, 7), // right bar
  rect(H_x,     3*G+1, 5, 1), // middle bar
];

const allFilled = [...P, ...I, ...Y, ...U, ...Sl, ...H].join(" ");

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
    const normalizedX = ((e.clientX - r.left) / r.width) * VIEWBOX_WIDTH;
    gradientX1Raw.set(Math.max(0, Math.min(VIEWBOX_WIDTH, normalizedX)));
  };

  const handleMouseLeave = () => gradientX1Raw.set(DEFAULT_GRADIENT_X);

  return (
    <div style={{ width: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div
        style={{ overflow: "hidden", borderTop: "1px solid var(--border-color)", cursor: "crosshair" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ display: "flex", width: "100%", transform: "translateY(37.5%)" }}>
          <svg
            style={{ width: "100%", height: "auto", display: "block" }}
            viewBox="0 0 1410 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={allFilled} stroke="currentColor" strokeOpacity="0.1"
              strokeWidth="1.5" fill="currentColor" fillOpacity="0.04" />
            <path d={allFilled} fill="url(#piyush_grad)" />
            <defs>
              <motion.linearGradient
                id="piyush_grad"
                x1={gradientX1} y1="1" x2="705" y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.625" stopColor="currentColor" stopOpacity="0" />
                <stop offset="1" stopColor="currentColor" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div style={{
        width: "100%", display: "flex", justifyContent: "flex-end",
        padding: "12px 24px", borderTop: "1px solid var(--border-color)",
      }}>
        <button onClick={scrollToTop} title="Back to top"
          style={{
            width: "36px", height: "36px", border: "1px solid var(--border-color)",
            background: "transparent", color: "var(--text-color)", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            borderRadius: "4px", opacity: 0.6, transition: "opacity 0.2s ease",
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
