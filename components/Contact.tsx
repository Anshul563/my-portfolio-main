"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import SectionLabel from "@/components/ui/SectionLabel";
import DotMatrixHeading from "@/components/ui/DotMatrixHeading";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const reduceMotion = useReducedMotion();

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
    <section id="contact" className="relative py-28">
      <div className="border-t border-[rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
            {/* LEFT label */}
            <div className="lg:col-span-3 pt-1">
              <SectionLabel index="05" label="Let&apos;s Work Together" />
            </div>

            {/* CENTER */}
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-[#F5F5F5]">
                Let&apos;s Build Something Together
              </h2>
              <p className="mt-5 text-[#A0A0A0] leading-relaxed max-w-md">
                Have a project in mind or just want to say hi? I&apos;d love to
                hear from you.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:anshulshakya18168@gmail.com"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#e5e5e5]"
                >
                  Get In Touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a
                  href="mailto:anshulshakya18168@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(255,255,255,0.25)] px-7 py-3.5 text-sm font-semibold text-[#F5F5F5] transition-colors hover:border-white hover:bg-white/5"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email Me
                </a>
              </div>
            </div>

            {/* RIGHT dot-matrix */}
            <motion.div
              className="lg:col-span-4 flex flex-col lg:items-end gap-2"
              aria-label="Good things ahead"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-right"
              >
                <DotMatrixHeading text="GOOD" className="block text-3xl sm:text-4xl leading-tight" />
                <DotMatrixHeading text="THINGS" className="block text-3xl sm:text-4xl leading-tight" />
                <DotMatrixHeading text="AHEAD" className="block text-3xl sm:text-4xl leading-tight text-white" />
              </motion.div>
              <span className="mt-4 h-px w-24 bg-[rgba(255,255,255,0.25)] lg:self-end" />
            </motion.div>
          </div>

          {/* FORM */}
          <div className="mt-20 max-w-3xl">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-[#666]"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-[rgba(255,255,255,0.15)] bg-transparent px-4 py-3 text-sm text-[#F5F5F5] placeholder:text-[#555] focus:border-[rgba(255,255,255,0.45)] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-[#666]"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full rounded-xl border border-[rgba(255,255,255,0.15)] bg-transparent px-4 py-3 text-sm text-[#F5F5F5] placeholder:text-[#555] focus:border-[rgba(255,255,255,0.45)] focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="project"
                  className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-[#666]"
                >
                  Project Details
                </label>
                <textarea
                  name="message"
                  id="project"
                  rows={5}
                  required
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full resize-none rounded-xl border border-[rgba(255,255,255,0.15)] bg-transparent px-4 py-3 text-sm text-[#F5F5F5] placeholder:text-[#555] focus:border-[rgba(255,255,255,0.45)] focus:outline-none transition-colors"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={reduceMotion ? {} : { scale: 1.01 }}
                whileTap={reduceMotion ? {} : { scale: 0.99 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-[#e5e5e5] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : success ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Message Sent!
                  </>
                ) : error ? (
                  <>
                    <XCircle className="h-4 w-4" aria-hidden="true" />
                    Failed to Send
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" aria-hidden="true" />
                  </>
                )}
              </motion.button>

              {success && (
                <p className="text-sm text-[#A0A0A0]">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              )}
              {error && (
                <p className="text-sm text-[#A0A0A0]">
                  Something went wrong. Please email me directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
