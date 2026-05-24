"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    description: "Perfect for getting online fast",
    features: [
      "Single Page / Landing Page",
      "Responsive Design",
      "Contact Form Integration",
      "Basic SEO Setup",
      "1 Revision Round",
    ],
    highlighted: false,
  },
  {
    name: "Business",
    price: "₹5,999",
    description: "Best for growing businesses",
    features: [
      "Multi-page Website (up to 5 pages)",
      "Responsive Design",
      "WhatsApp Integration",
      "SEO Ready",
      "Contact Form",
      "3 Revision Rounds",
      "Social Media Links",
    ],
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₹9,999+",
    description: "For full-scale web applications",
    features: [
      "Full Stack Web App",
      "Admin Dashboard",
      "Custom Features & Logic",
      "Database Integration",
      "Authentication System",
      "API Development",
      "Unlimited Revisions",
      "Priority Support",
    ],
    highlighted: false,
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

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-neon-blue/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-neon-purple/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Packages That Fit Your{" "}
            <span className="text-gradient">Needs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Transparent pricing with no hidden costs. Pick the plan that suits
            your project.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              className={`relative rounded-2xl p-8 border transition-all duration-500 ${
                plan.highlighted
                  ? "border-neon-purple/40 bg-neon-purple/5 shadow-[0_0_40px_rgba(188,19,254,0.15)]"
                  : "border-white/10 bg-white/5 hover:border-white/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-neon-purple text-white text-xs font-semibold font-sans">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-1 font-heading">
                {plan.name}
              </h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-white font-heading">
                  {plan.price}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-6 font-sans">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm font-sans">
                    <Check className="w-4 h-4 text-neon-blue shrink-0 mt-0.5" />
                    <span className="text-gray-400">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-neon-purple text-white hover:shadow-[0_0_25px_rgba(188,19,254,0.4)]"
                    : "border border-white/20 text-gray-200 hover:bg-white/5"
                }`}
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
