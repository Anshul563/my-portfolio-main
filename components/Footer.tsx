"use client";

import { Github, Linkedin, Instagram, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-2 font-heading">
              Anshul<span className="text-neon-purple">.</span>
            </h3>
            <p className="text-sm text-gray-500 font-sans">
              Full Stack Web Developer crafting modern digital experiences.
            </p>
          </div>
          <div className="md:text-center">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 font-heading">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["Services", "Projects", "Pricing", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-500 hover:text-white transition-colors font-sans"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="md:text-right">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 font-heading">
              Connect
            </h4>
            <div className="flex gap-4 md:justify-end">
              <a
                href="https://github.com/Anshul563"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-gray-500 transition-all"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://linkedin.com/in/anshulshakya-bca84"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-gray-500 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://instagram.com/anshulll_84"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white text-gray-500 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Anshul Shakya. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-neon-pink" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
