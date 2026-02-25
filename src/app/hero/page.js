"use client";
import Hero from "@/components/Hero";
import CustomCursor from "@/components/CustomCursor";

export default function HeroPage() {
  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <div id="hero">
        <Hero />
      </div>
    </div>
  );
}
