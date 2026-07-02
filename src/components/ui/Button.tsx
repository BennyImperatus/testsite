// src/components/ui/Button.tsx
'use client';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function PremiumButton({ children, variant = 'primary' }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Magnet-Stärke (höherer Teiler = schwächerer Zug)
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyle = "relative px-8 py-4 rounded-full font-sans tracking-wider text-sm uppercase transition-shadow duration-500 will-change-transform";
  const styles = variant === 'primary' 
    ? `${baseStyle} bg-[#1b1b1b] text-white hover:shadow-[0_0_30px_rgba(183,110,121,0.2)]`
    : `${baseStyle} glass-card text-[#1b1b1b] hover:bg-white/60`;

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={styles}
    >
      {children}
    </motion.button>
  );
}