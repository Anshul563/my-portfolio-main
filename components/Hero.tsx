"use client";

import { motion } from "framer-motion";
import { RiNextjsFill, RiReactjsLine, RiFirebaseFill } from "react-icons/ri";
import { SiTailwindcss, SiTypescript, SiNodedotjs } from "react-icons/si";
import { ArrowRight, Check } from "lucide-react";

const techStack = [
  { icon: RiReactjsLine, label: "React", color: "#61DAFB" },
  { icon: RiNextjsFill, label: "Next.js", color: "#fff" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: RiFirebaseFill, label: "Firebase", color: "#FFCA28" },
  { icon: SiNodedotjs, label: "Node.js", color: "#339933" },
];

const stats = [
  { label: "Projects Completed", value: "10+" },
  { label: "Fast Delivery", value: "7 Days" },
  { label: "Affordable Pricing", value: "₹2,999+" },
  { label: "Responsive", value: "100%" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-[200px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-green-400 border border-green-400/30 rounded-full bg-green-400/5 font-sans"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Freelance Projects
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-tight"
            >
              I Build Websites That{" "}
              <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent animate-pulse">
                Grow
              </span>{" "}
              Businesses
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed max-w-xl font-sans"
            >
              I create modern, fast, and high-converting websites that help
              businesses, creators, and startups attract more clients.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-neon-purple text-white font-semibold hover:shadow-[0_0_30px_rgba(188,19,254,0.5)] transition-all duration-300"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-white/20 text-gray-200 font-semibold hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                View My Work
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-neon-blue shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/20 to-transparent rounded-3xl blur-3xl" />
              <div className="relative glass-panel rounded-3xl p-8 w-full max-w-sm border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">
                    developer.tsx
                  </span>
                </div>

                <div className="space-y-3 mb-6 font-mono text-sm">
                  <div>
                    <span className="text-blue-400">const</span>{" "}
                    <span className="text-green-400">developer</span>{" "}
                    <span className="text-gray-400">=</span> {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">role</span>
                    {": "}
                    <span className="text-yellow-300">
                      &quot;Full Stack Web Developer&quot;
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">stack</span>
                    {": ["}
                  </div>
                  <div className="pl-8 text-gray-400">
                    &quot;React&quot;, &quot;Next.js&quot;, &quot;Firebase&quot;,
                    &quot;Node.js&quot;
                  </div>
                  <div className="pl-4">
                    {"]"}
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">available</span>
                    {": "}
                    <span className="text-green-400">true</span>,
                  </div>
                  <div>
                    {"}"}
                    ;
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {techStack.map((t) => (
                    <div
                      key={t.label}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <t.icon
                        className="w-6 h-6"
                        style={{ color: t.color }}
                      />
                      <span className="text-[10px] text-gray-400 font-medium">
                        {t.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
