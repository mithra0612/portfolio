import Hero from "@/components/Hero";
import FloatingNav from "@/components/FloatingNav";
import About from "@/components/About";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <FloatingNav/>
      <Hero />
      <About/>
      <Skills/>
    </div>
  );
}