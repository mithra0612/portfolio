"use client";
import Projects from "@/components/Projects";
import CustomCursor from "@/components/CustomCursor";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <div id="projects">
        <Projects />
      </div>
    </div>
  );
}
