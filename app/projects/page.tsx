import Projects from "@/components/Projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="relative z-10 pt-28 pb-10">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-[#A0A0A0] transition-colors hover:text-white"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>
      </div>
      <Projects />
    </main>
  );
}
