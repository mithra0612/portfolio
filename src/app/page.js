"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/contacts";
import Experience from "@/components/Experience";
import PortfolioLoader from "@/components/PortfolioLoader";
import { useState, useEffect } from "react";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";

// Module-level in-memory flag: persists during client-side SPA navigation, resets on browser refresh
let hasMountedOnce = false;

export default function Home() {
  const [portfolioLoading, setPortfolioLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        // 1. One-time skip token set when user clicked a 'Back to ...' button or visited a subpage
        const shouldSkip = sessionStorage.getItem('skip_loader') === 'true';
        if (shouldSkip) {
          sessionStorage.removeItem('skip_loader');
          hasMountedOnce = true;
          return false;
        }

        // 2. If Home was already mounted in this client SPA session, skip loader
        if (hasMountedOnce) {
          return false;
        }
      } catch (e) {}
    }
    // Normal page refresh (F5 / reload) or initial visit -> ALWAYS show loader
    return true;
  });

  const handleLoaderComplete = () => {
    hasMountedOnce = true;
    setPortfolioLoading(false);
  };

  useEffect(() => {
    if (!portfolioLoading && typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash;
      const timer = setTimeout(() => {
        if (hash === '#home' || hash === '#hero') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [portfolioLoading]);

  return (
    <div className="relative">
      {portfolioLoading && (
        <PortfolioLoader onComplete={handleLoaderComplete} />
      )}

      {/* ── FLOATING NAVIGATION ── */}
      <FloatingNav />

      {/* ── STICKY HERO LAYER ── pinned behind all content sections */}
      <section id="hero" className="sticky top-0 h-screen w-full z-0 overflow-hidden">
        <div id="home" className="absolute top-0 left-0 w-0 h-0 pointer-events-none" aria-hidden="true" />
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
    </div>
  );
}