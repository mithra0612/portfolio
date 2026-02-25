"use client";
import Skills from "@/components/Skills";
import CustomCursor from "@/components/CustomCursor";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <div id="skills">
        <Skills />
      </div>
    </div>
  );
}
