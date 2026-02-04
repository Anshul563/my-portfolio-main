"use client";

import { GridBackground } from "./GridBackground";
import { ParticlesBackground } from "./ParticlesBackground";
import { GradientBackground } from "./GradientBackground";

export const Background = () => {
  return (
    <div className="fixed inset-0 z-[-1] min-h-screen w-full bg-black">
      <GradientBackground />
      <GridBackground />
      <ParticlesBackground />
    </div>
  );
};
