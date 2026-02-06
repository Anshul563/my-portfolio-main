"use client";

import { motion } from "framer-motion";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
};

export default function GlassCard({
  children,
  className = "",
  hoverEffect = false,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={
        hoverEffect
          ? { scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }
          : {}
      }
      className={`glass-panel rounded-2xl p-6 transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
