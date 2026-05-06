import { useEffect, useRef, useState } from "react";
import { ElectricBorder } from "./ElectricBorder";
import { useSound } from "../hooks/useSound";
import { laserSmall001Sound } from "../lib/laserSound";

const HOVER_DELAY_MS = 150;

export function AvatarElectricEffect({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const [play] = useSound(laserSmall001Sound, { volume: 0.2 });

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(true);
      play();
    }, HOVER_DELAY_MS);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsHovered(false);
  };

  return (
    <ElectricBorder
      chaos={0.03}
      borderRadius={999}
      color="#fbbf24"
      active={isHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </ElectricBorder>
  );
}