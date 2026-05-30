import { motion, useMotionValue, useSpring } from "framer-motion";

const VIEWBOX_WIDTH = 1410;
const DEFAULT_GRADIENT_X = 705;

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

  const handleMouseMove = (event) => {
    const container = event.currentTarget;
    const containerRect = container.getBoundingClientRect();
    const mouseX = event.clientX - containerRect.left;
    const normalizedX = (mouseX / containerRect.width) * VIEWBOX_WIDTH;
    gradientX1Raw.set(Math.max(0, Math.min(VIEWBOX_WIDTH, normalizedX)));
  };

  const handleMouseLeave = () => {
    gradientX1Raw.set(DEFAULT_GRADIENT_X);
  };

  // Using same coordinate system as chanhdai (32px grid)
  // Each letter ~160px wide, gap ~75px, total slot ~235px
  // 6 letters * 235 = 1410 fits perfectly

  const filled = `
    M1 1H129V33H161V97H129V129H1V1Z M33 33V97H129V65H97V33H33Z
    M193 1H321V33H257V225H321V257H193V225H225V33H193V1Z
    M353 1H417V97H449V1H513V97H481V129H449V257H417V129H385V97H353V1Z
    M545 1H577V225H641V257H545V1Z M641 225H673V1H705V257H641V225Z
    M737 1H897V65H769V97H897V193H737V257H905V193H897V225H769V193H897V161H737V97H769V65H905V1H737Z
    M961 1H993V113H1153V1H1185V257H1153V145H993V257H961V1Z
  `;

  const outline = `
    M1 1H129V33H161V97H129V129H1V1Z M33 33V97H129V65H97V33H33Z
    M193 1H321V33H257V225H321V257H193V225H225V33H193V1Z
    M353 1H417V97H449V1H513V97H481V129H449V257H417V129H385V97H353V1Z
    M545 1H577V225H641V257H545V1Z M641 225H673V1H705V257H641V225Z
    M737 1H897V65H769V97H897V193H737V257H905V193H897V225H769V193H897V161H737V97H769V65H905V1H737Z
    M961 1H993V113H1153V1H1185V257H1153V145H993V257H961V1Z
  `;

  return (
    <div style={{ width: "100%", overflow: "hidden", display: "flex", flexDirection: "column" }}>

      {/* Name — half cut off */}
      <div
        style={{ overflow: "hidden", borderTop: "1px solid var(--border-color)" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{
          display: "flex", width: "100%",
          transform: "translateY(37.5%)",
          alignItems: "center", justifyContent: "center"
        }}>
          <svg
            style={{ width: "100%", height: "auto" }}
            viewBox="0 0 1410 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ghost outline */}
            <path
              d={outline}
              stroke="currentColor"
              strokeOpacity="0.1"
              strokeWidth="2"
              fill="currentColor"
              fillOpacity="0.03"
            />

            {/* Gradient filled */}
            <path
              d={filled}
              fill="url(#piyush_grad)"
            />

            <defs>
              <motion.linearGradient
                id="piyush_grad"
                x1={gradientX1}
                y1="1"
                x2="705"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.625" stopColor="currentColor" stopOpacity="0" />
                <stop offset="1" stopColor="currentColor" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Scroll to top */}
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
