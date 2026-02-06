"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
          {/* Placeholder for user image if they have one, otherwise a stylized avatar */}
          <div className="w-full h-full bg-linear-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-4xl">
            <Image src="/profile.png" alt="Profile" width={128} height={128} />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Hi, I'm <span className="text-gradient">Anshul Shakya</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Full Stack Developer & BCA Student.
          <br />
          Crafting digital experiences with code and creativity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-linear-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 shadow-md shadow-purple-500/30"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
