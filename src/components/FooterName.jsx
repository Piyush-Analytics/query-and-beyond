import { motion, useMotionValue, useSpring } from "framer-motion";

const VIEWBOX_WIDTH = 1057;
const DEFAULT_GRADIENT_X = 528;

const G = 32;

function rect(x, y, w, h) {
  const x1 = x;
  const y1 = y;
  const x2 = x + w * G;
  const y2 = y + h * G;
  return `M${x1} ${y1} H${x2} V${y2} H${x1} Z `;
}

const P_x = 1;
const P = [
  rect(P_x,        1,  5,  1),
  rect(P_x,        1,  1,  7),
  rect(P_x,        1,  1,  1),
  rect(P_x + 4*G,  1,  1,  3),
  rect(P_x,        3*G+1, 5, 1),
];

const I_x = 193;
const I = [
  rect(I_x,        1,  3,  1),
  rect(I_x,       6*G+1, 3, 1),
  rect(I_x + G,    1,  1,  7),
];

const Y_x = 353;
const Y = [
  rect(Y_x,        1,  1,  4),
  rect(Y_x + 4*G,  1,  1,  4),
  rect(Y_x + G,    3*G+1, 1, 1),
  rect(Y_x + 3*G,  3*G+1, 1, 1),
  rect(Y_x + 2*G,  3*G+1, 1, 4),
];

const U_x = 545;
const U = [
  rect(U_x,        1,  1,  6),
  rect(U_x + 4*G,  1,  1,  6),
  rect(U_x,       6*G+1, 5, 1),
];

const S_x = 705;
const S = [
  rect(S_x,        1,  5,  1),
  rect(S_x,        1,  1,  3),
  rect(S_x,       3*G+1, 5, 1),
  rect(S_x + 4*G, 3*G+1, 1, 3),
  rect(S_x,       6*G+1, 5, 1),
];

const H_x = 897;
const H = [
  rect(H_x,        1,  1,  7),
  rect(H_x + 4*G,  1,  1,  7),
  rect(H_x,       3*G+1, 5, 1),
];

const allFilled = [...P, ...I, ...Y, ...U, ...S, ...H].join(" ");

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function FooterName() {
  const gradientX1Raw = useMotionValue(DEFAULT_GRADIENT_X);
  const gradientX1 = useSpring(gradientX1Raw, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const normalizedX = (mouseX / rect.width) * VIEWBOX_WIDTH;
    gradientX1Raw.set(Math.max(0, Math.min(VIEWBOX_WIDTH, normalizedX)));
  };

  const handleMouseLeave = () => {
    gradientX1Raw.set(DEFAULT_GRADIENT_X);
  };

  return (
    <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>

      {/* Scroll to top button — bottom right, above name */}
      <div style={{
        position: "absolute",
        bottom: "18%",
        right: "2%",
        zIndex: 10,
      }}>
        <button
          onClick={scrollToTop}
          title="Back to top"
          style={{
            width: "40px",
            height: "40px",
            border: "1px solid var(--border-color)",
            background: "var(--bg-color)",
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16" height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>

      {/* Name SVG */}
      <div
        style={{ display: "flex", width: "100%", transform: "translateY(37.5%)", cursor: "crosshair" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          style={{ width: "100%", height: "auto" }}
          viewBox="0 0 1057 226"
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
          <path
            d={allFilled}
            fill="url(#piyush_grad)"
          />
          <defs>
            <motion.linearGradient
              id="piyush_grad"
              x1={gradientX1}
              y1="1"
              x2="609"
              y2="225"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.3" stopColor="currentColor" stopOpacity="0" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0.85" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
