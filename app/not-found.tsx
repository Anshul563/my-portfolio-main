"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative z-10 min-h-screen flex items-center justify-center pt-24 pb-24 px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative max-w-md mx-auto text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-[100px] sm:text-[140px] font-bold leading-none text-[#F5F5F5]"
          style={{ textShadow: "0 0 24px rgba(255,255,255,0.12)" }}
        >
          404
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6"
        >
          <h1 className="font-heading text-xl font-bold text-white">
            Page Not Found
          </h1>
          <p className="mt-3 text-sm text-[#A0A0A0] leading-relaxed">
            Looks like this page doesn&apos;t exist or was moved. Let&apos;s get
            you back on track.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#e5e5e5]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
