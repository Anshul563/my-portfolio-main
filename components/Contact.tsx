"use client";

import GlassCard from "./ui/GlassCard";
import {
  Mail,
  Linkedin,
  Github,
  Loader2,
  CheckCircle2,
  XCircle,
  Instagram,
} from "lucide-react";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_5nmk9dk",
        "template_b3i2ysp",
        formRef.current,
        "W1NTZLqaRXojja0CN",
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current?.reset();
        },
        (error) => {
          console.error(error.text);
          setError(true);
          setLoading(false);
        },
      );
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <p className="text-xl text-gray-400 mb-12">
        Have a project in mind or just want to say hi? <br />
        Feel free to reach out to me below!
      </p>

      <div className="flex justify-center gap-6 mb-16">
        <a
          href="mailto:anshulshakya18168@gmail.com"
          className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors group backdrop-blur-xs"
        >
          <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
        </a>
        <a
          href="https://linkedin.com/in/anshulshakya-bca84"
          target="_blank"
          className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors group backdrop-blur-xs"
        >
          <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
        </a>
        <a
          href="https://github.com/Anshul563"
          target="_blank"
          className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors group backdrop-blur-xs"
        >
          <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
        </a>
        <a
          href="https://instagram.com/anshulll_84"
          target="_blank"
          className="p-4 rounded-full bg-white/5 hover:bg-white/10 transition-colors group backdrop-blur-xs"
        >
          <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white" />
        </a>
        {/* Add more social links if needed */}
      </div>

      <GlassCard className="p-8 max-w-2xl mx-auto text-left backdrop-blur-xs">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-400 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              required
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
              name="user_email"
              id="email"
              required
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
              name="message"
              id="message"
              rows={4}
              required
              className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              placeholder="Hello, I'd like to work with you..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md font-bold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group shadow-lg shadow-purple-500/10"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin relative z-10" />
                <span className="relative z-10">Sending...</span>
              </>
            ) : success ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-green-400 relative z-10" />
                <span className="relative z-10 text-green-400">
                  Message Sent!
                </span>
              </>
            ) : error ? (
              <>
                <XCircle className="w-5 h-5 text-red-400 relative z-10" />
                <span className="relative z-10 text-red-400">
                  Failed to Send
                </span>
              </>
            ) : (
              <span className="relative z-10 flex items-center gap-2">
                Send Message <Mail className="w-4 h-4" />
              </span>
            )}
          </motion.button>

          {success && (
            <p className="text-green-400 text-sm text-center mt-2">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </p>
          )}
          {error && (
            <p className="text-red-400 text-sm text-center mt-2">
              Something went wrong. Please try again later or email me directly.
            </p>
          )}
        </form>
      </GlassCard>

      <footer className="mt-20 text-gray-500 text-sm">
        © {new Date().getFullYear()} Anshul Shakya. All rights reserved.
      </footer>
    </section>
  );
}
