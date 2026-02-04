"use client";

import GlassCard from "./ui/GlassCard";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

      <GlassCard className="text-lg text-gray-300 leading-relaxed space-y-4 backdrop-blur-xs">
        <p>
          I am Anshul Shakya, a passionate BCA student at GLA University,
          Mathura (2024-2027). My journey in technology is driven by a curiosity
          to understand how things work and a desire to build solutions that
          matter.
        </p>
        <p>
          As a Full Stack Developer, I specialize in building modern web and
          mobile applications using cutting-edge technologies like
          <span className="text-white font-semibold">
            {" "}
            React, Next.js, Node.js, and Flutter
          </span>
          .
        </p>
        <p>
          I love exploring new frameworks, optimizing performance, and creating
          user interfaces that are not only functional but also visually
          stunning. When I'm not coding, I'm likely learning about the latest
          tech trends or working on a new side project.
        </p>
      </GlassCard>
    </section>
  );
}
