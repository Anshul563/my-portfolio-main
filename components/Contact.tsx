"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2, XCircle, MessageCircle } from "lucide-react";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

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
        (err) => {
          console.error(err.text);
          setError(true);
          setLoading(false);
        },
      );
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Have a Project in{" "}
            <span className="text-gradient">Mind?</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s build something amazing together. Tell me about your
            project and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-panel rounded-2xl p-6 border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1 font-heading">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/918439320563"
                    target="_blank"
                    className="text-sm text-gray-400 hover:text-green-400 transition-colors font-sans"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1 font-heading">Email</p>
                  <a
                    href="mailto:anshulshakya18168@gmail.com"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors font-sans"
                  >
                    anshulshakya18168@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1 font-heading">
                    Location
                  </p>
                  <p className="text-sm text-gray-400 font-sans">India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-panel rounded-2xl p-8 border border-white/5">
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-400 mb-2 font-sans"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      id="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-purple/50 transition-colors font-sans"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-400 mb-2 font-sans"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-purple/50 transition-colors font-sans"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-medium text-gray-400 mb-2 font-sans"
                  >
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    id="project"
                    rows={5}
                    required
                    placeholder="Tell me about your project, goals, and timeline..."
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-purple/50 transition-colors resize-none font-sans"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-4 rounded-xl bg-neon-purple text-white font-semibold hover:shadow-[0_0_30px_rgba(188,19,254,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-sans"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : success ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-green-300" />
                      Message Sent!
                    </>
                  ) : error ? (
                    <>
                      <XCircle className="w-5 h-5 text-red-400" />
                      Failed to Send
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                {success && (
                  <p className="text-green-400 text-sm text-center">
                    Thanks for reaching out! I&apos;ll get back to you soon.
                  </p>
                )}
                {error && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please email me directly.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
