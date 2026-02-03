"use client";

import { projects } from "@/data/projects";
import GlassCard from "./ui/GlassCard";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <GlassCard
            key={project.id}
            className="flex flex-col h-full"
            hoverEffect={true}
          >
            {/* Image Placeholder - In a real app we'd use project.image */}
            <div className="h-48 w-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 flex items-center justify-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <span className="text-4xl">🚀</span>
            </div>

            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

            <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2 py-1 bg-blue-500/10 text-blue-300 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  title="View Source"
                >
                  <Github size={20} />
                </Link>
              )}
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  title="Live Demo"
                >
                  <ExternalLink size={20} />
                </Link>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
