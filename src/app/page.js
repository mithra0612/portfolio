import Hero from "@/components/Hero";
import FloatingNav from "@/components/FloatingNav";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <FloatingNav/>
      <Hero />
    </div>
  );
}