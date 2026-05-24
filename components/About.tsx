"use client";

import { motion } from "framer-motion";
import { Code2, Briefcase, Zap, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Projects", value: "10+" },
  { icon: Zap, label: "Learning", value: "2+ Years" },
  { icon: Code2, label: "Delivery", value: "Fast" },
  { icon: Users, label: "Client-Focused", value: "100%" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              Building Digital Solutions With{" "}
              <span className="text-gradient">Purpose</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 font-sans">
              I&apos;m Anshul Shakya, a Full Stack Web Developer specializing in
              creating modern, responsive, and conversion-focused digital
              experiences using React, Next.js, Firebase, and Node.js.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                >
                  <stat.icon className="w-5 h-5 text-neon-purple shrink-0" />
                  <div>
                    <p className="text-lg font-bold text-white">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/10 to-neon-purple/10 rounded-3xl blur-2xl" />
              <div className="relative glass-panel rounded-3xl p-6 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-gray-500 font-mono">
                    about.tsx
                  </span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div>
                    <span className="text-blue-400">function</span>{" "}
                    <span className="text-green-400">buildSolution</span>
                    {"() {"}
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-400">const</span> stack = [
                  </div>
                  <div className="pl-8 text-yellow-300">
                    &quot;React&quot;,
                  </div>
                  <div className="pl-8 text-yellow-300">
                    &quot;Next.js&quot;,
                  </div>
                  <div className="pl-8 text-yellow-300">
                    &quot;Node.js&quot;,
                  </div>
                  <div className="pl-8 text-yellow-300">
                    &quot;TypeScript&quot;
                  </div>
                  <div className="pl-4">];</div>
                  <div className="pl-4">
                    <span className="text-purple-400">return</span>{" "}
                    <span className="text-green-400">
                      &quot;Modern Solution&quot;
                    </span>
                    ;
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
