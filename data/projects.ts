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
    link: "https://anshul-shakya.com",
    github: "https://github.com/anshulshakya/portfolio",
  },
  {
    id: "2",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for managing online stores, featuring real-time data visualization, inventory management, and order tracking.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    // Add real links when available
    link: "#",
    github: "#",
  },
  {
    id: "3",
    title: "Flutter Chat App",
    description:
      "A real-time messaging application focused on privacy and speed. Supports group chats, media sharing, and push notifications.",
    tags: ["Flutter", "Firebase", "Dart"],
    link: "#",
    github: "#",
  },
];
