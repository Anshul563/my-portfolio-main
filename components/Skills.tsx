"use client";

import { skills } from "@/data/skills";
import GlassCard from "./ui/GlassCard";

export default function Skills() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-16 text-center">My Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <GlassCard
            key={category}
            className="p-6 backdrop-blur-xs"
            hoverEffect={true}
          >
            <h3 className="text-xl font-semibold mb-6 border-b border-white/10 pb-2 text-blue-200">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 text-sm bg-white/5 rounded-full border border-white/5 text-gray-300 hover:bg-white/10 transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
