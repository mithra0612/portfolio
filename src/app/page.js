"use client";
import Hero from "@/components/Hero";
import FloatingNav from "@/components/FloatingNav";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/contacts";
import PortfolioLoader from "@/components/PortfolioLoader";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Home() {
  const [portfolioLoading, setPortfolioLoading] = useState(true);

  const handleLoaderComplete = () => {
    setPortfolioLoading(false);
  };

  return (
    <div className="min-h-screen bg-black">
      {portfolioLoading ? (
        <PortfolioLoader onComplete={handleLoaderComplete} />
      ) : (
        <>
          <FloatingNav />
          <div id="hero">
            <Hero />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="contact">
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}