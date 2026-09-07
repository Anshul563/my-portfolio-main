"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import DottedSphere from "@/components/ui/DottedSphere";
import DottedBackground from "@/components/ui/DottedBackground";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const sphereLabels = ["CODE", "DESIGN", "SOLVE", "REPEAT"];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <DottedBackground />
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
        >
          {/* LEFT */}
          <div className="space-y-8 lg:space-y-10">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(255,255,255,0.18)] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-[#A0A0A0]">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                Open to Opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[44px] sm:text-6xl lg:text-[64px] xl:text-[72px] leading-[1.04] tracking-tight font-bold"
              style={{ fontFamily: "var(--font-heading), sans-serif" }}
            >
              <span className="block" style={{ letterSpacing: "0.02em" }}>BUILDING</span>
              <span className="block text-[#A0A0A0]" style={{ letterSpacing: "0.04em" }}>IDEAS</span>
              <span className="block text-white" style={{ letterSpacing: "0.02em" }}>
                INTO <span className="text-[#8a8a8a]">IMPACT</span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-xl"
            >
              Hi, I&apos;m Anshul Shakya — a full stack developer who loves turning
              ideas into beautiful, functional and scalable web experiences.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-1"
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-[#e5e5e5]"
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(255,255,255,0.25)] px-7 py-3.5 text-sm font-semibold text-[#F5F5F5] transition-colors hover:border-white hover:bg-white/5"
              >
                Download CV
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT - abstract technical visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/3]">
              <div className="absolute inset-0 rounded-3xl border border-[rgba(255,255,255,0.12)] overflow-hidden flex items-center justify-center">
                {/* internal dotted grid */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <DottedSphere size={290} className="relative" />

                {/* plus symbol */}
                <span
                  aria-hidden="true"
                  className="absolute left-6 top-6 font-mono text-sm text-[#666]"
                >
                  +
                </span>
                <span
                  aria-hidden="true"
                  className="absolute right-6 bottom-6 font-mono text-sm text-[#666]"
                >
                  +
                </span>

                {/* horizontal / vertical decorative lines */}
                <span aria-hidden="true" className="absolute left-0 right-0 top-1/2 h-px bg-[rgba(255,255,255,0.08)]" />
                <span aria-hidden="true" className="absolute top-0 bottom-0 left-1/2 w-px bg-[rgba(255,255,255,0.08)]" />
              </div>

              {!reduceMotion ? (
                <motion.div
                  className="absolute -left-5 top-1/2 -translate-y-1/2 flex flex-col gap-3"
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                >
                  {sphereLabels.map((label) => (
                    <span
                      key={label}
                      className="font-mono text-[9px] tracking-[0.3em] text-[#666]"
                    >
                      {label}
                    </span>
                  ))}
                </motion.div>
              ) : (
                <div
                  className="absolute -left-5 top-1/2 -translate-y-1/2 flex flex-col gap-3"
                  aria-hidden="true"
                >
                  {sphereLabels.map((label) => (
                    <span
                      key={label}
                      className="font-mono text-[9px] tracking-[0.3em] text-[#666]"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              )}

              {/* bottom-right label */}
              <div className="absolute -bottom-6 right-4 text-right" aria-hidden="true">
                <p className="font-heading text-lg font-bold leading-none text-[#A0A0A0]">
                  IDEAS
                </p>
                <p className="font-heading text-lg font-bold leading-none text-[#A0A0A0]">
                  TO
                </p>
                <p className="font-heading text-lg font-bold leading-none text-white">
                  PRODUCTS
                </p>
              </div>

              {/* small dot */}
              <span aria-hidden="true" className="absolute -bottom-2 left-8 h-1.5 w-1.5 rounded-full bg-white/70" />
              <span aria-hidden="true" className="absolute -top-1 right-16 h-1 w-1 rounded-full bg-white/40" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
