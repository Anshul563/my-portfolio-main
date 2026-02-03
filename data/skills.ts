export type Skill = {
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Mobile"
    | "Languages"
    | "Database"
    | "Tools";
  icon?: string; // We can add icon paths or component names here if needed
};

export const skills: Skill[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "Flutter", category: "Mobile" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "VS Code", category: "Tools" },
];
