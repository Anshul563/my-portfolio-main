"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-neon-purple/20 rounded-full blur-[80px] -z-10 mix-blend-screen" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center"
      >
        <div className="relative w-40 h-40 mx-auto mb-8 group">
          <div className="absolute -inset-1 bg-linear-to-br from-neon-blue to-neon-purple rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
            <div className="w-full h-full bg-linear-to-tr from-gray-900 to-gray-800 flex items-center justify-center text-4xl">
              <Image
                src="/profile.png"
                alt="Profile"
                width={160}
                height={160}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-gradient drop-shadow-[0_0_15px_rgba(188,19,254,0.5)]">
            Anshul Shakya
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Full Stack Developer & BCA Student.
          <br />
          Crafting{" "}
          <span className="text-neon-blue font-medium">
            digital experiences
          </span>{" "}
          with code and creativity.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-neon-blue/10 border border-neon-blue/50 text-neon-blue font-medium hover:bg-neon-blue/20 hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all duration-300 backdrop-blur-sm"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-neon-purple/10 border border-neon-purple/50 text-neon-purple font-medium hover:bg-neon-purple/20 hover:shadow-[0_0_20px_rgba(188,19,254,0.4)] transition-all duration-300 backdrop-blur-sm"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
