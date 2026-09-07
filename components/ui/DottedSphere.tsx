"use client";

import { motion, useReducedMotion } from "framer-motion";

interface DottedSphereProps {
  className?: string;
  size?: number;
}

/**
 * Abstract dotted sphere / curved dot field built from a grid of dots that
 * fade outward to form a sphere impression. Dots are static divs rendered
 * once; the whole sphere slowly rotates (GPU-friendly transform). A tiny,
 * CSS-only twinkle animation runs on a subset of dots for subtle life
 * without per-dot JS animation subscriptions.
 */
export default function DottedSphere({ className = "", size = 320 }: DottedSphereProps) {
  const reduceMotion = useReducedMotion();
  const rowCount = 18;
  const cell = size / rowCount;
  const radius = (rowCount - 1) / 2;

  const dots: React.ReactNode[] = [];

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < rowCount; col++) {
      const dx = col - radius;
      const dy = row - radius;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > radius) continue;

      const falloff = 1 - dist / radius;
      const x = col * cell + cell / 2;
      const y = row * cell + cell / 2;
      const d = Math.max(1, Math.min(3.2, falloff * 3.2));
      const twinkle = (col * 7 + row * 13) % 3 === 0;

      dots.push(
        <span
          key={`${row}-${col}`}
          className={twinkle ? "dot-twinkle" : undefined}
          style={{
            position: "absolute",
            left: x,
            top: y,
            width: d,
            height: d,
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.9)",
            opacity: Math.max(0.05, falloff * 0.5),
            transform: "translate(-50%,-50%)",
            animationDelay: `${((col * 7 + row * 3) % 10) * 0.4}s`,
          }}
        />
      );
    }
  }

  return (
    <motion.div
      aria-hidden="true"
      className={`select-none ${className}`}
      style={{ width: size, height: size }}
      animate={reduceMotion ? {} : { rotate: [0, 6, -2, 0] }}
      transition={{ duration: 26, ease: "easeInOut", repeat: Infinity }}
    >
      <div
        className="relative h-full w-full rounded-full"
        style={{
          background:
            "radial-gradient(circle at 32% 30%, rgba(255,255,255,0.035), transparent 62%)",
        }}
      >
        {dots}
      </div>
    </motion.div>
  );
}
