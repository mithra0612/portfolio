"use client";
import Hero from "@/components/Hero";
import FloatingNav from "@/components/FloatingNav";
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
          {/* ── STICKY HERO LAYER ── pinned behind all content sections */}
          <section className="sticky top-0 h-screen w-full z-0 overflow-hidden">
            <Hero />
          </section>

          {/* ── CURTAIN STACK ── each section slides up and covers the hero ── */}

          {/* About Me Card (The Reveal) */}
          <section
            id="about"
            className="relative z-10 bg-white min-h-screen w-full"
          >
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-black uppercase pt-20 px-8">
              About Me
            </h2>
            {/* <!-- Layout and content to be injected here later --> */}
            <div className="w-full"></div>
          </section>

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