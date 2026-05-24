"use client";

import { motion } from "framer-motion";
import {
  RiReactjsLine,
  RiNextjsFill,
  RiFirebaseFill,
  RiNodeTree,
} from "react-icons/ri";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiVercel,
} from "react-icons/si";

const techs = [
  { icon: RiReactjsLine, label: "React", color: "#61DAFB" },
  { icon: RiNextjsFill, label: "Next.js", color: "#fff" },
  { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, label: "Tailwind", color: "#06B6D4" },
  { icon: RiFirebaseFill, label: "Firebase", color: "#FFCA28" },
  { icon: RiNodeTree, label: "Node.js", color: "#339933" },
  { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  { icon: SiGit, label: "Git", color: "#F05032" },
  { icon: SiVercel, label: "Vercel", color: "#fff" },
];

export default function TechStack() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-10 font-heading"
        >
          Technologies I Work With
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 group"
            >
              <tech.icon
                className="w-8 h-8 md:w-10 md:h-10 transition-all duration-300 group-hover:scale-110"
                style={{ color: tech.color }}
              />
              <span className="text-[11px] text-gray-500 group-hover:text-gray-300 transition-colors font-medium">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
