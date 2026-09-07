"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

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
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects({ limit }: ProjectsProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="relative py-28">
      <div className="border-t border-[rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto px-6 py-28">
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end gap-6 sm:justify-between">
            <SectionLabel index="03" label="Featured Projects" />
            {limit && (
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 text-sm text-[#A0A0A0] transition-colors hover:text-[#F5F5F5]"
              >
                View All Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            )}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {displayedProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={cardVariants}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.12)] bg-[#050505] transition-colors duration-300 hover:border-[rgba(255,255,255,0.35)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden border-b border-[rgba(255,255,255,0.08)]">
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  >
                    <span className="font-heading text-lg font-bold tracking-wide text-[#A0A0A0] transition-colors group-hover:text-white">
                      {project.title}
                    </span>
                  </div>
                  <span aria-hidden="true" className="absolute left-3 top-3 font-mono text-[9px] uppercase tracking-[0.2em] text-[#666]">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col grow p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading text-xl font-bold text-[#F5F5F5]">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="h-5 w-5 shrink-0 text-[#666] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#A0A0A0] grow">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[rgba(255,255,255,0.12)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-[#666] transition-colors group-hover:border-[rgba(255,255,255,0.25)] group-hover:text-[#A0A0A0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {!limit && (
            <div className="mt-12">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-sm text-[#A0A0A0] transition-colors hover:text-white"
              >
                <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
