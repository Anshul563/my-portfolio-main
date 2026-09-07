"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = navItems.map((i) => i.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return active;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 lg:h-18 flex items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-2"
          aria-label="Anshul Shakya - home"
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(255,255,255,0.3)] text-[11px] font-semibold tracking-wide text-[#F5F5F5] transition-colors group-hover:border-white"
          >
            AS
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative text-[13px] tracking-wide transition-colors ${
                  isActive ? "text-[#F5F5F5]" : "text-[#666] hover:text-[#A0A0A0]"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-dot"
                    aria-hidden="true"
                    className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white"
                    transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 40 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[rgba(255,255,255,0.25)] px-5 py-2 text-[13px] tracking-wide text-[#F5F5F5] transition-colors hover:border-white hover:bg-white/5"
          >
            Let&apos;s Talk
            <span className="h-1.5 w-1.5 rounded-full bg-white/80 transition-transform group-hover:scale-125" aria-hidden="true" />
          </a>
        </div>

        <button
          className="md:hidden text-[#F5F5F5] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-[#050505]/95 backdrop-blur-md border-t border-[rgba(255,255,255,0.08)]"
          >
            <div className="flex flex-col px-6 py-5 gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between py-3 text-sm border-b border-[rgba(255,255,255,0.05)] last:border-b-0 ${
                    active === item.href ? "text-[#F5F5F5]" : "text-[#A0A0A0]"
                  }`}
                >
                  {item.label}
                  {active === item.href && (
                    <span className="h-1 w-1 rounded-full bg-white" aria-hidden="true" />
                  )}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(255,255,255,0.25)] px-5 py-3 text-sm text-[#F5F5F5]"
              >
                Let&apos;s Talk
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
