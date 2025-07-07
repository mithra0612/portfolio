"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactsSection from "@/components/contacts";
import Footer from "@/components/Footer";
import FloatingNav from "@/components/FloatingNav";
import CircularTextCursor from "@/components/CircularTextCursor";

export default function Home() {
  return (
    <main className="cursor-none">
      {/* Global cursor component */}
      <CircularTextCursor 
        text="MADHUMITHRA • " 
        spinDuration={15}
        onHover="speedUp"
        size={120}
      />
      
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
        <ContactsSection />
      </div>
      <Footer />
    </main>
  );
}
