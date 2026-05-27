"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const previews = [
  {
    id: "fg",
    name: "FireGround",
    bg: "bg-zinc-950",
    headerBg: "bg-zinc-900/80",
    accent: "text-orange-400",
    accentBg: "bg-orange-500",
    heroGradient: "from-orange-600/20 via-amber-600/10 to-transparent",
    heroTitle: "Esports Tournament Platform",
    heroDesc: "Real-time brackets, live match tracking & team management",
    badges: ["⚔️ Live Brackets", "📊 Stats", "🏆 Rankings"],
  },
  {
    id: "pdf",
    name: "PDF Tools",
    bg: "bg-gray-50",
    headerBg: "bg-white/80",
    accent: "text-blue-600",
    accentBg: "bg-blue-600",
    heroGradient: "from-blue-500/10 via-cyan-400/5 to-transparent",
    heroTitle: "PDF Solutions, Simplified",
    heroDesc: "Merge, split, compress & convert — all in your browser",
    badges: ["📄 Merge", "📦 Compress", "🔄 Convert"],
  },
  {
    id: "mp",
    name: "Marketplace",
    bg: "bg-slate-950",
    headerBg: "bg-slate-900/80",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-500",
    heroGradient: "from-emerald-600/20 via-teal-600/10 to-transparent",
    heroTitle: "Find Top Freelancers",
    heroDesc: "Post projects, hire talent, and grow your business",
    badges: ["👥 Top Talent", "✅ Verified", "🔒 Secure"],
  },
];

export default function WebsiteMockup() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % previews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const p = previews[active];

  return (
    <motion.div
      className="relative w-full max-w-lg"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute -inset-6 bg-linear-to-br from-neon-purple/20 via-transparent to-neon-blue/20 rounded-[40px] blur-3xl opacity-60" />

      <div className="relative glass-panel rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-neon-purple/5">
        <div className="flex items-center gap-3 px-4 py-3 bg-white/4 border-b border-white/6">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="flex gap-1.5 ml-3">
            {previews.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`px-3 py-1 text-[11px] font-semibold rounded-t-md transition-all duration-300 ${
                  i === active
                    ? "bg-white/8 text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>

        <div
          className="aspect-16/10 relative overflow-hidden"
          style={{ background: p.bg === "bg-gray-50" ? "#f9fafb" : "#09090b" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col"
            >
              <div
                className={`mx-3 mt-3 flex items-center justify-between px-3 py-2 rounded-lg ${
                  p.bg === "bg-gray-50"
                    ? "bg-white/90 shadow-sm border border-gray-200/50"
                    : p.headerBg
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-current opacity-60" />
                  <span className={`text-[11px] font-bold ${p.accent}`}>
                    {p.name}
                  </span>
                </div>
                <div className="flex gap-3 text-[9px] text-gray-400 font-medium">
                  <span>Home</span>
                  <span>Features</span>
                  {p.bg !== "bg-gray-50" && <span>Pricing</span>}
                </div>
              </div>

              <div
                className={`mx-3 mt-2 flex-1 rounded-xl bg-linear-to-br ${p.heroGradient} flex flex-col items-center justify-center px-5`}
              >
                <h3
                  className={`text-sm font-bold text-center leading-snug ${
                    p.bg === "bg-gray-50" ? "text-gray-900" : "text-white"
                  }`}
                >
                  {p.heroTitle}
                </h3>
                <p
                  className={`text-[9px] mt-1 text-center max-w-[85%] ${
                    p.bg === "bg-gray-50" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {p.heroDesc}
                </p>
                <div
                  className={`mt-2.5 px-4 py-1.5 rounded-full ${p.accentBg} text-white text-[9px] font-bold`}
                >
                  Get Started →
                </div>
              </div>

              <div className="flex gap-2 mx-3 mt-2 mb-3">
                {p.badges.map((badge, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-lg px-2.5 py-2 text-[8px] font-semibold text-center ${
                      p.bg === "bg-gray-50"
                        ? "bg-gray-100 text-gray-600"
                        : "bg-white/6 text-gray-300"
                    }`}
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
