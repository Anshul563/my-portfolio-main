export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Personal Portfolio",
    description:
      "A premium personal portfolio website showcasing my skills and projects. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations and a glassmorphism aesthetic.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    link: "https://anshulll.in",
    github: "https://github.com/Anshul563/my-portfolio-main",
  },
  {
    id: "2",
    title: "Orbit",
    description:
      "College creates a unique environment where thousands of talented people live in the same place, yet we still pay strangers online for help. I wanted to build a digital ecosystem that unlocks the latent value on campus.",
    tags: ["React", "Next.js", "Tailwind CSS", "PostgreSQL"],
    link: "https://orbit-six-rosy.vercel.app/",
    github: "https://github.com/Anshul563/orbit",
  },
  {
    id: "3",
    title: "Donezo - Team Task & Sprint Manager",
    description:
      "Donezo, a sprint management tool designed for high-performance teams. Beyond just a task list I wanted to solve the complexity of real-time collaboration and secure data isolation.",
    tags: ["Next JS", "Tailwind CSS", "PostgreSQL", "TypeScript"],
    link: "https://donezo-app-theta.vercel.app/",
    github: "https://github.com/Anshul563/donezo-app",
  },
];
