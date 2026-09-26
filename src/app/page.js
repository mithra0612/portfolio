"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/contacts";
import Experience from "@/components/Experience";
import PortfolioLoader from "@/components/PortfolioLoader";
import { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import FloatingNav from "@/components/FloatingNav";
import Footer from "@/components/Footer";

// Module-level in-memory flag: persists during client-side SPA navigation, resets on browser refresh
let hasMountedOnce = false;

export default function Home() {
  const lenis = useLenis();
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
    if (portfolioLoading || typeof window === 'undefined') return;

    const target = (() => {
      try {
        const stored = sessionStorage.getItem('target_section');
        if (stored) return stored;
      } catch (e) {}
      if (window.location.hash && window.location.hash !== '#home' && window.location.hash !== '#hero') {
        return window.location.hash;
      }
      return null;
    })();

    if (!target) return;

    window.__isNavClicking = true;

    const scrollToTarget = () => {
      if (target === '#home' || target === '#hero') {
        if (lenis) {
          lenis.scrollTo(0, { immediate: false, duration: 0.8 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return true;
      }

      const el = document.querySelector(target);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { offset: 0, duration: 1.0 });
        } else {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return true;
      }
      return false;
    };

    // Staggered attempts to guarantee smooth scroll after route switch & DOM settling
    scrollToTarget();
    const t1 = setTimeout(scrollToTarget, 60);
    const t2 = setTimeout(scrollToTarget, 200);
    const t3 = setTimeout(scrollToTarget, 500);
    const t4 = setTimeout(scrollToTarget, 900);
    const t5 = setTimeout(() => {
      scrollToTarget();
      try {
        sessionStorage.removeItem('target_section');
      } catch (e) {}
      window.__isNavClicking = false;
    }, 1400);

    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.0 });
          else el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [portfolioLoading, lenis]);

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