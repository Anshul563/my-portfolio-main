"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const values = ["CURIOSITY", "CONSISTENCY", "BETTER EVERYDAY"];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="border-t border-[rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-12 gap-12 lg:gap-8"
          >
            <div className="lg:col-span-3 pt-1">
              <SectionLabel index="01" label="About Me" />
            </div>

            <div className="lg:col-span-6">
              <p className="text-2xl sm:text-3xl leading-relaxed text-[#E5E5E5]">
                I&apos;m a{" "}
                <span className="text-white font-semibold">Full Stack Developer</span>{" "}
                who designs and builds modern, responsive web experiences using
                React, Next.js, Node.js and TypeScript.
              </p>
              <p className="mt-6 text-[#A0A0A0] leading-relaxed max-w-xl">
                I focus on turning complex problems into clean, scalable
                products — from idea and architecture to polished interface.
                Currently exploring new technologies and taking on freelance
                projects.
              </p>
            </div>

            <div className="lg:col-span-3">
              <div className="flex flex-col gap-3 lg:items-end">
                {values.map((value) => (
                  <span
                    key={value}
                    className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#666]"
                  >
                    {value}
                  </span>
                ))}
                <span className="mt-4 h-px w-24 bg-[rgba(255,255,255,0.2)] lg:self-end" aria-hidden="true" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
