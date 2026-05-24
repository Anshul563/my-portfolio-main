"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder, TechFlow",
    content:
      "Anshul built our company website from scratch. The design was clean, the code was solid, and delivery was faster than expected. Highly recommended for anyone looking for a professional web presence.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "CEO, DesignCraft Studio",
    content:
      "Working with Anshul was an absolute pleasure. He understood exactly what we needed and delivered a stunning portfolio site that perfectly represents our brand. Great communication throughout.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Founder, StartupX",
    content:
      "We needed a landing page that converts — and that's exactly what we got. Anshul's attention to detail and focus on performance made all the difference. Our sign-ups increased by 40%.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Trusted by{" "}
            <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Here&apos;s what clients say about working with me.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-neon-purple/20 transition-all duration-500"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-6 font-sans">
                &ldquo;{t.content}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-white font-heading">{t.name}</p>
                <p className="text-xs text-gray-500 font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
