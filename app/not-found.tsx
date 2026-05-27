"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md mx-auto px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[120px] sm:text-[160px] font-heading font-bold leading-none bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent"
        >
          404
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="glass-panel rounded-2xl p-8 -mt-6 relative"
        >
          <h1 className="text-xl font-heading font-bold text-white mb-2">
            Page Not Found
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed mb-6">
            Looks like this page doesn&apos;t exist or was moved. Let&apos;s get
            you back on track.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-neon-purple to-purple-600 text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(188,19,254,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
