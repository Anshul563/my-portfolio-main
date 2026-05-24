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
    title: "FireGround",
    description:
      "An E-sports tournament platform built for competitive gaming communities. Features live brackets, team management, real-time match tracking, and automated tournament scheduling.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "https://github.com/Anshul563",
  },
  {
    id: "2",
    title: "PDF Tools",
    description:
      "An online PDF utility platform offering merge, split, compress, and convert functionality. Built with a focus on speed, privacy (all processing is client-side), and clean UX.",
    tags: ["React", "TypeScript", "Tailwind", "WebAssembly"],
    link: "#",
    github: "https://github.com/Anshul563",
  },
  {
    id: "3",
    title: "Freelance Marketplace",
    description:
      "A full-stack job marketplace connecting freelancers with clients. Includes user profiles, job posting, bidding system, escrow payments, and review management.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "https://github.com/Anshul563",
  },
];
