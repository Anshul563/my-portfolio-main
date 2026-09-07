"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const journey = [
  {
    period: "2023 — Now",
    title: "Full Stack Web Development",
    org: "Self-Directed Learning",
    description:
      "Deep-diving into modern web technologies — React, Next.js, Node.js and databases — building real-world projects along the way.",
  },
  {
    period: "2024",
    title: "Freelance Web Developer",
    org: "Independent",
    description:
      "Started taking on freelance projects — landing pages, business sites and full-stack web apps for early clients.",
  },
  {
    period: "Present",
    title: "Building Products",
    org: "Ongoing",
    description:
      "Shipping tools like an esports tournament platform, a privacy-focused PDF utility and a freelance marketplace.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="border-t border-[rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-3 pt-1">
              <SectionLabel index="04" label="Experience" />
            </div>

            <div className="lg:col-span-8">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative border-l border-[rgba(255,255,255,0.12)] pl-8 space-y-12"
              >
                {journey.map((item) => (
                  <motion.div key={item.title} variants={itemVariants} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[37px] top-1.5 h-2 w-2 rounded-full bg-white/80"
                    />
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-[#666]">{item.period}</span>
                      <span className="h-px w-6 bg-[rgba(255,255,255,0.2)]" aria-hidden="true" />
                      <span className="text-xs uppercase tracking-[0.2em] text-[#666]">
                        {item.org}
                      </span>
                    </div>
                    <h3 className="mt-3 font-heading text-xl font-bold text-[#F5F5F5]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-[#A0A0A0] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
