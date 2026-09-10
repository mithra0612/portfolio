"use client";
import Hero from "@/components/Hero";
import RightSidebarNav from "@/components/RightSidebarNav";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/contacts";
import Experience from "@/components/Experience";
import PortfolioLoader from "@/components/PortfolioLoader";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [portfolioLoading, setPortfolioLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('loaderShown');
    }
    return true;
  });

  const handleLoaderComplete = () => {
    setPortfolioLoading(false);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('loaderShown', 'true');
    }
  };

  return (
    <div className="relative">

      {portfolioLoading ? (
        <PortfolioLoader onComplete={handleLoaderComplete} />
      ) : (
        <>
          {/* ── HIGH-END RIGHT SIDEBAR NAVIGATION ── */}
          <RightSidebarNav />

          {/* ── STICKY HERO LAYER ── pinned behind all content sections */}
          <section className="sticky top-0 h-screen w-full z-0 overflow-hidden">
            <Hero />
          </section>

          {/* ── CURTAIN STACK ── each section slides up and covers the hero ── */}

          {/* ── ABOUT ME ── */}
          <About />

          {/* Experience */}
          <section
            id="experience"
            className="relative z-10 w-full bg-[var(--bg-base)]"
          >
            <Experience />
          </section>

          {/* Skills */}
          <section
            id="skills"
            className="relative z-10 w-full bg-[var(--bg-base)]"
          >
            <Skills />
          </section>

          {/* Projects */}
          <section
            id="projects"
            className="relative z-10 w-full bg-[var(--bg-base)]"
          >
            <Projects />
          </section>

          {/* Contact + Footer */}
          <section
            id="contact"
            className="relative z-10 w-full bg-[var(--bg-base)]"
          >
            <Contact />
            <Footer />
          </section>
        </>
      )}
    </div>
  );
}