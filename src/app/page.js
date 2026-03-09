"use client";
import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import FloatingNav from "@/components/FloatingNav";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/contacts";
import PortfolioLoader from "@/components/PortfolioLoader";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  const [portfolioLoading, setPortfolioLoading] = useState(() => {
    // Check if loader has already been shown in this session
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('loaderShown');
    }
    return true;
  });

  const handleLoaderComplete = () => {
    setPortfolioLoading(false);
    // Mark that loader has been shown
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('loaderShown', 'true');
    }
  };

  return (
    <div className="w-full bg-black">
      {/* Custom cursor mounted always so it's visible during load and after */}
      <CustomCursor />

      {portfolioLoading ? (
        <PortfolioLoader onComplete={handleLoaderComplete} />
      ) : (
        <>
          /* The line `          {/* <FloatingNav /> */}` is a commented-out code in JSX. This means that the `<FloatingNav />` component is not being rendered or displayed on the webpage. It is likely that the developer has temporarily disabled or removed the `<FloatingNav />` component from the page for testing or debugging purposes. */
          <FloatingNav />
          <div id="hero" className="md:pt-8">
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
          </div>
        </>
      )}
    </div>
  );
}