import { motion, useMotionValue, useSpring } from "framer-motion";

const VIEWBOX_WIDTH = 1620;
const DEFAULT_GRADIENT_X = 810;
const G = 32;

// Increased spacing between letters
const S = 270;

function rect(x, y, w, h) {
  const x2 = x + w * G;
  const y2 = y + h * G;
  return `M${x} ${y} H${x2} V${y2} H${x} Z `;
}

// P
const P_x = 0;
const P = [
  rect(P_x, 1, 5, 1),
  rect(P_x, 1, 1, 7),
  rect(P_x + 4 * G, 1, 1, 3),
  rect(P_x, 3 * G + 1, 5, 1),
];

// I
const I_x = S;
const I = [
  rect(I_x, 1, 3, 1),
  rect(I_x, 6 * G + 1, 3, 1),
  rect(I_x + G, 1, 1, 7),
];

// Y
const Y_x = S * 2;
const Y = [
  rect(Y_x, 1, 1, 4),
  rect(Y_x + 4 * G, 1, 1, 4),
  rect(Y_x + G, 3 * G + 1, 1, 1),
  rect(Y_x + 3 * G, 3 * G + 1, 1, 1),
  rect(Y_x + 2 * G, 3 * G + 1, 1, 4),
];

// U
const U_x = S * 3;
const U = [
  rect(U_x, 1, 1, 6),
  rect(U_x + 4 * G, 1, 1, 6),
  rect(U_x, 6 * G + 1, 5, 1),
];

// S
const S_x = S * 4;
const Sl = [
  rect(S_x, 1, 5, 1),
  rect(S_x, 1, 1, 3),
  rect(S_x, 3 * G + 1, 5, 1),
  rect(S_x + 4 * G, 3 * G + 1, 1, 3),
  rect(S_x, 6 * G + 1, 5, 1),
];

// H
const H_x = S * 5;
const H = [
  rect(H_x, 1, 1, 7),
  rect(H_x + 4 * G, 1, 1, 7),
  rect(H_x, 3 * G + 1, 5, 1),
];

const allFilled = [...P, ...I, ...Y, ...U, ...Sl, ...H].join(" ");

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function FooterName() {
  const gradientXRaw = useMotionValue(DEFAULT_GRADIENT_X);

  const gradientX = useSpring(gradientXRaw, {
    stiffness: 140,
    damping: 25,
    mass: 0.6,
  });

  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();

    const x =
      ((e.clientX - r.left) / r.width) *
      VIEWBOX_WIDTH;

    gradientXRaw.set(
      Math.max(0, Math.min(VIEWBOX_WIDTH, x))
    );
  };

  const handleMouseLeave = () =>
    gradientXRaw.set(DEFAULT_GRADIENT_X);

  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          overflow: "hidden",
          borderTop: "1px solid var(--border-color)",
          cursor: "crosshair",
          height: "420px",
        }}
      >
        <div
          style={{
            width: "100%",
            transform: "translateY(42%)",
          }}
        >
          <svg
            viewBox="0 0 1620 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          >
            {/* outline */}
            <path
              d={allFilled}
              stroke="currentColor"
              strokeOpacity="0.08"
              strokeWidth="1"
              fill="currentColor"
              fillOpacity="0.015"
            />

            {/* filled */}
            <path
              d={allFilled}
              fill="url(#piyush_gradient)"
            />

            <defs>
              <motion.linearGradient
                id="piyush_gradient"
                x1={gradientX}
                y1="0"
                x2="810"
                y2="380"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.4"
                  stopColor="currentColor"
                  stopOpacity="0"
                />

                <stop
                  offset="0.8"
                  stopColor="currentColor"
                  stopOpacity="0.5"
                />

                <stop
                  offset="1"
                  stopColor="currentColor"
                  stopOpacity="1"
                />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          padding: "12px 24px",
          borderTop:
            "1px solid var(--border-color)",
        }}
      >
        <button
          onClick={scrollToTop}
          title="Back to top"
          style={{
            width: "36px",
            height: "36px",
            border:
              "1px solid var(--border-color)",
            background: "transparent",
            color: "var(--text-color)",
            cursor: "pointer",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0.6,
            transition: "all .2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "0.6";
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      </div>
    </div>
  );
}