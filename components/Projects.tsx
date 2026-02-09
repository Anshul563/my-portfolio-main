"use client";

import { projects } from "@/data/projects";
import GlassCard from "./ui/GlassCard";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectsProps {
  limit?: number;
}

export default function Projects({ limit }: ProjectsProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="projects" className="py-24 px-4 max-w-7xl mx-auto relative">
      {/* Background glow for projects section */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] -z-10" />

      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        <span className="text-gradient">
          {limit ? "Featured Projects" : "All Projects"}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project) => (
          <GlassCard
            key={project.id}
            className="flex flex-col h-full relative group overflow-hidden"
            hoverEffect={true}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-blue transition-colors relative z-10">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-6 grow leading-relaxed relative z-10 font-light">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8 relative z-10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 bg-neon-blue/10 text-neon-blue rounded-full border border-neon-blue/20"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto relative z-10">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 hover:bg-neon-blue/20 hover:text-neon-blue border border-white/10 hover:border-neon-blue/50 transition-all duration-300"
                  title="View Source"
                >
                  <Github size={20} />
                </Link>
              )}
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="p-3 rounded-full bg-white/5 hover:bg-neon-purple/20 hover:text-neon-purple border border-white/10 hover:border-neon-purple/50 transition-all duration-300"
                  title="Live Demo"
                >
                  <ExternalLink size={20} />
                </Link>
              )}
            </div>
          </GlassCard>
        ))}
      </div>

      {limit && (
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-neon-blue/50 hover:shadow-[0_0_15px_rgba(0,243,255,0.2)] transition-all font-medium group backdrop-blur-sm"
          >
            See All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
    </section>
  );
}
