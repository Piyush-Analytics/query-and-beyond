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
            {/* PIYUSH — same pixel grid as chanhdai ncdai source */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="
                M1 1H129V33H161V129H129V161H33V129H1V1ZM33 33V97H129V65H97V33H33Z
                M193 1H289V33H225V225H289V257H193V225H225V33H193V1ZM257 1H289V33H257V1Z
                M321 1H385V97H417V1H481V97H449V161H417V257H385V161H353V97H321V1Z
                M513 1H545V225H609V257H513V1ZM609 225H641V1H673V257H609V225Z
                M705 1H865V65H737V129H865V193H705V257H873V193H865V225H737V193H865V161H705V129H865V65H873V1H705ZM737 33V65H865V33H737Z
                M905 1H937V129H1065V1H1097V257H1065V161H937V257H905V1Z
              "
              fill="url(#piyush_grad)"
            />

            {/* Ghost outline */}
            <path
              d="
                M1 1H129V33H161V129H129V161H33V129H1V1ZM33 33V97H129V65H97V33H33Z
                M193 1H289V33H225V225H289V257H193V225H225V33H193V1ZM257 1H289V33H257V1Z
                M321 1H385V97H417V1H481V97H449V161H417V257H385V161H353V97H321V1Z
                M513 1H545V225H609V257H513V1ZM609 225H641V1H673V257H609V225Z
                M705 1H865V65H737V129H865V193H705V257H873V193H865V225H737V193H865V161H705V129H865V65H873V1H705ZM737 33V65H865V33H737Z
                M905 1H937V129H1065V1H1097V257H1065V161H937V257H905V1Z
              "
              stroke="currentColor"
              strokeOpacity="0.1"
              strokeWidth="2"
              fill="currentColor"
              fillOpacity="0.03"
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
