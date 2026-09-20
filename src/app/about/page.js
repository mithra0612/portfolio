"use client";
import About from "@/components/About";
import CustomCursor from "@/components/CustomCursor";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <CustomCursor />
      <div id="about">
        <About />
      </div>
    </div>
  );
}
