import Projects from "@/components/Projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="relative z-10 pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4 mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>
      <Projects />
    </main>
  );
}
