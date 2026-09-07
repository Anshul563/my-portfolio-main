"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
} from "react-icons/si";
import { CiBoxList } from "react-icons/ci";
import { TbBrandReactNative } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { RiMovie2Line } from "react-icons/ri";
import { FiBox } from "react-icons/fi";

const iconMap: Record<string, IconType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  Python: SiPython,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Fast API": SiFastapi,
  Flutter: SiFlutter,
  "React Native": TbBrandReactNative,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Firebase: SiFirebase,
  Git: SiGit,
  "VS Code": VscCode,
  "Framer Motion": RiMovie2Line,
  C: CiBoxList,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  const skillsData = [
    "React", "Next.js", "TypeScript", "JavaScript",
    "Node.js", "Express.js", "Python", "C",
    "Tailwind CSS", "MongoDB", "PostgreSQL", "MySQL",
    "Firebase", "Flutter", "React Native", "Framer Motion",
    "Fast API", "Git", "VS Code",
  ];

  return (
    <section className="relative py-28">
      <div className="border-t border-[rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="flex items-start justify-between mb-16">
            <SectionLabel index="02" label="Skills" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {skillsData.map((name) => {
              const Icon = iconMap[name] ?? FiBox;
              return (
                <motion.div
                  key={name}
                  variants={cardVariants}
                  className="group flex flex-col items-start gap-4 rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#050505] p-5 transition-colors hover:border-[rgba(255,255,255,0.35)]"
                >
                  <Icon className="h-5 w-5 text-[#666] transition-all duration-300 group-hover:scale-110 group-hover:text-white" aria-hidden="true" />
                  <span className="text-sm text-[#A0A0A0] transition-colors group-hover:text-[#F5F5F5]">
                    {name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
