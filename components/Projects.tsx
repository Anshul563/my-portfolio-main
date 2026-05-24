"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectsProps {
  limit?: number;
}

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

export default function Projects({ limit }: ProjectsProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            <span className="text-gradient">Featured Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A selection of projects I&apos;ve built — each focused on
            performance, design, and real-world impact.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative glass-panel rounded-2xl p-6 border border-white/5 hover:border-neon-purple/30 transition-all duration-500 flex flex-col"
            >
              <div className="h-40 rounded-xl bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 mb-6 flex items-center justify-center border border-white/5 group-hover:border-neon-purple/20 transition-colors overflow-hidden">
                <div className="text-center p-4">
                  <p className="text-lg font-bold text-white/80 group-hover:text-neon-purple transition-colors">
                    {project.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Live Preview</p>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-blue transition-colors font-heading">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed grow font-sans">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-auto">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-blue/50 transition-all"
                  >
                    <Github size={14} />
                    GitHub
                  </Link>
                )}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full bg-neon-purple/10 text-neon-purple border border-neon-purple/20 hover:bg-neon-purple/20 transition-all"
                  >
                    <ExternalLink size={14} />
                    Live
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {limit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-blue/50 transition-all text-sm font-semibold group"
            >
              See All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
