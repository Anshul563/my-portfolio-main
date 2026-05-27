"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Zap, Smartphone, Gauge, Handshake } from "lucide-react";
import WebsiteMockup from "./WebsiteMockup";

const trustItems = [
  { icon: Zap, label: "Fast Delivery" },
  { icon: Smartphone, label: "Mobile Optimized" },
  { icon: Gauge, label: "Performance Focused" },
  { icon: Handshake, label: "Client-Centered" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      <motion.div
        style={{ y: blob1Y }}
        className="absolute top-1/4 -left-32 w-[700px] h-[700px] bg-neon-purple/10 rounded-full blur-[150px] -z-10"
      />
      <motion.div
        style={{ y: blob2Y }}
        className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px] -z-10"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-blue/5 rounded-full blur-[200px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div className="space-y-8 lg:space-y-9">
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-green-400 border border-green-400/25 rounded-full bg-green-400/5 font-sans">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Available for Freelance Projects
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.08] tracking-tight"
            >
              Modern Websites That Help{" "}
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                Businesses Grow Online
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed max-w-xl font-sans"
            >
              I design and develop fast, conversion-focused websites that help
              businesses attract more leads, build trust, and increase sales.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-1"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-neon-purple to-purple-600 text-white font-semibold text-base hover:shadow-[0_0_40px_rgba(188,19,254,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Get Free Website Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-gray-200 font-semibold text-base hover:bg-white/5 hover:border-white/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                View My Work
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-3 pt-2"
            >
              {trustItems.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12] hover:scale-[1.02] transition-all duration-300 cursor-default"
                >
                  <div className="p-1.5 rounded-lg bg-neon-purple/10">
                    <item.icon className="w-3.5 h-3.5 text-neon-blue shrink-0" />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <WebsiteMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
