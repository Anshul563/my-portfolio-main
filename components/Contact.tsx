"use client";

import GlassCard from "./ui/GlassCard";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <p className="text-xl text-gray-400 mb-12">
        Have a project in mind or just want to say hi? <br />
        Feel free to reach out to me below!
      </p>

      <div className="flex justify-center gap-6 mb-16">
        <a
          href="mailto:anshul@example.com"
          className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
        >
          <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
        >
          <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
        </a>
        <a
          href="https://github.com/Anshul563"
          target="_blank"
          className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
        >
          <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
        </a>
        {/* Add more social links if needed */}
      </div>

      <GlassCard className="p-8 max-w-2xl mx-auto text-left">
        <form className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Hello, I'd like to work with you..."
            />
          </div>
          <button className="w-full py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-white hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </GlassCard>

      <footer className="mt-20 text-gray-500 text-sm">
        © {new Date().getFullYear()} Anshul Shakya. All rights reserved.
      </footer>
    </section>
  );
}
