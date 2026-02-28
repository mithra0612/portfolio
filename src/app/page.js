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
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [portfolioLoading, setPortfolioLoading] = useState(true);

  const handleLoaderComplete = () => {
    setPortfolioLoading(false);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Custom cursor mounted always so it's visible during load and after */}
      <CustomCursor />

      {portfolioLoading ? (
        <PortfolioLoader onComplete={handleLoaderComplete} />
      ) : (
        <>
          /* The line `          {/* <FloatingNav /> */}` is a commented-out code in JSX. This means that the `<FloatingNav />` component is not being rendered or displayed on the webpage. It is likely that the developer has temporarily disabled or removed the `<FloatingNav />` component from the page for testing or debugging purposes. */
          <FloatingNav />
          <div id="hero" className="pt-8">
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