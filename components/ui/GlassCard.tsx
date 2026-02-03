"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // We need to create lib/utils or just use string concat if simpler. I'll stick to a simple implementation for now to avoid extra files if not strictly needed, but tailwind-merge is safer.

// Let's create a simple utility here since creating a full lib/utils might be overkill if we don't have it yet,
// BUT I installed `clsx` and `tailwind-merge` so I should probably use them.
// I'll define the helper inside or assume I can create the util file next.
// Actually, standard practice is to have a util. Let me create the component assuming I will create the util file in a moment.

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
