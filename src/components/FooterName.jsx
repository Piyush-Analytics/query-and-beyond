import { motion, useMotionValue, useSpring } from "framer-motion";

const VIEWBOX_WIDTH = 1057;
const DEFAULT_GRADIENT_X = 528;

// Each letter is 32 units wide per column, 32 per row, 7 rows tall = 224 units
// gap between letters = 32 units
// Total: 6 letters * 5 cols * 32 = 960 + 5 gaps * 32 = 160 => 1120, padded to 1218

// Grid unit = 32, origin Y = 1
// Letter offsets (X start):
// P=1, I=193, Y=353, U=545, S=705, H=897

const G = 32; // grid unit

function rect(x, y, w, h) {
  const x1 = x;
  const y1 = y;
  const x2 = x + w * G;
  const y2 = y + h * G;
  return `M${x1} ${y1} H${x2} V${y2} H${x1} Z `;
}

// P — starts at x=1
const P_x = 1;
const P = [
  rect(P_x,        1,  5,  1), // top bar
  rect(P_x,        1,  1,  7), // left bar
  rect(P_x,        1,  1,  1), // tl
  rect(P_x + 4*G,  1,  1,  3), // right bar top
  rect(P_x,        3*G+1, 5, 1), // middle bar
];

// I — starts at x=193
const I_x = 193;
const I = [
  rect(I_x,        1,  3,  1), // top bar
  rect(I_x,       6*G+1, 3, 1), // bottom bar
  rect(I_x + G,    1,  1,  7), // center bar
];

// Y — starts at x=353
const Y_x = 353;
const Y = [
  rect(Y_x,        1,  1,  4), // left top
  rect(Y_x + 4*G,  1,  1,  4), // right top
  rect(Y_x + G,    3*G+1, 1, 1), // join left
  rect(Y_x + 3*G,  3*G+1, 1, 1), // join right
  rect(Y_x + 2*G,  3*G+1, 1, 4), // stem
];

// U — starts at x=545
const U_x = 545;
const U = [
  rect(U_x,        1,  1,  6), // left bar
  rect(U_x + 4*G,  1,  1,  6), // right bar
  rect(U_x,       6*G+1, 5, 1), // bottom bar
];

// S — starts at x=705
const S_x = 705;
const S = [
  rect(S_x,        1,  5,  1), // top bar
  rect(S_x,        1,  1,  3), // top-left
  rect(S_x,       3*G+1, 5, 1), // middle bar
  rect(S_x + 4*G, 3*G+1, 1, 3), // bottom-right
  rect(S_x,       6*G+1, 5, 1), // bottom bar
];

// H — starts at x=897
const H_x = 897;
const H = [
  rect(H_x,        1,  1,  7), // left bar
  rect(H_x + 4*G,  1,  1,  7), // right bar
  rect(H_x,       3*G+1, 5, 1), // middle bar
];

const allFilled = [...P, ...I, ...Y, ...U, ...S, ...H].join(" ");

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
    <div
      style={{ overflow: "hidden", width: "100%", cursor: "crosshair" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ display: "flex", width: "100%", transform: "translateY(37.5%)" }}>
        <svg
  style={{ width: "100%", height: "auto" }}
  viewBox="0 0 1057 226"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
          {/* Ghost outline */}
          <path
            d={allFilled}
            stroke="currentColor"
            strokeOpacity="0.1"
            strokeWidth="1.5"
            fill="currentColor"
            fillOpacity="0.04"
          />

          {/* Gradient fill */}
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
