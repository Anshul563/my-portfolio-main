"use client";

import { motion } from "framer-motion";
import { Code, Monitor, Briefcase, Layers } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Landing Page Development",
    description:
      "High-converting landing pages designed for lead generation and campaign performance.",
    gradient: "from-neon-blue/20 to-transparent",
  },
  {
    icon: Briefcase,
    title: "Business Websites",
    description:
      "Professional multi-page websites for brands and businesses that establish credibility.",
    gradient: "from-neon-purple/20 to-transparent",
  },
  {
    icon: Layers,
    title: "Portfolio Websites",
    description:
      "Personal branding websites for creators, designers, and freelancers to showcase work.",
    gradient: "from-neon-pink/20 to-transparent",
  },
  {
    icon: Code,
    title: "Full Stack Web Apps",
    description:
      "Custom scalable web applications with admin dashboards and real-time features.",
    gradient: "from-neon-blue/20 to-transparent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Services That Help Your Business{" "}
            <span className="text-gradient">Grow</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From landing pages to full-stack applications, I deliver modern web
            solutions tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative glass-panel rounded-2xl p-6 border border-white/5 hover:border-neon-purple/30 transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 group-hover:bg-neon-purple/10 transition-colors">
                  <service.icon className="w-6 h-6 text-neon-purple" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-neon-purple transition-colors font-heading">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-sans">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
