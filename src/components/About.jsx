"use client";;
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function GlowingEffectDemoSecond() {
  const gridRef = useRef(null);

  useEffect(() => {
    // GSAP scroll-triggered animation for grid items
    const gridItems = gridRef.current.querySelectorAll("li");
    
    gridItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { 
          opacity: 0, 
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1 // Stagger effect
        }
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <ul
        ref={gridRef}
        className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-4 lg:gap-4 xl:max-h-[45-rem] xl:grid-rows-3">
        <GridItem
          area="md:[grid-area:1/1/3/7] xl:[grid-area:1/1/3/7]"
          icon={<Box className="h-6 w-6 text-black dark:text-neutral-400" />}
          title="Do things the right way"
          description="Running out of copy so I'll write anything." />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:1/7/2/13]"
          icon={<Settings className="h-6 w-6 text-black dark:text-neutral-400" />}
          title="The best AI code editor ever."
          description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me." />
        <GridItem
          area="md:[grid-area:2/7/3/10] xl:[grid-area:2/7/3/10]"
          icon={<Lock className="h-6 w-6 text-black dark:text-neutral-400" />}
          title="You should buy Aceternity UI Pro"
          description="It's the best money you'll ever spend" />
        <GridItem
          area="md:[grid-area:2/10/3/13] xl:[grid-area:2/10/3/13]"
          icon={<Sparkles className="h-6 w-6 text-black dark:text-neutral-400" />}
          title="This card is also built by Cursor"
          description="I'm not even kidding. Ask my mom if you don't believe me." />
        <GridItem
          area="md:[grid-area:3/1/5/13] xl:[grid-area:3/1/4/13]"
          icon={<Search className="h-6 w-6 text-black dark:text-neutral-400" />}
          title="Coming soon on Aceternity UI"
          description="I'm writing the code as I record this, no shit." />
      </ul>
    </div>
  );
}

const GridItem = ({
  area,
  icon,
  title,
  description
}) => {
  const itemRef = useRef(null);

  useEffect(() => {
    // Individual hover animations for each grid item
    const item = itemRef.current;
    
    const handleMouseEnter = () => {
      gsap.to(item, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(item, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };
    
    item.addEventListener('mouseenter', handleMouseEnter);
    item.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      item.removeEventListener('mouseenter', handleMouseEnter);
      item.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <li ref={itemRef} className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          gradientColors={["#00FFFF", "#00CED1", "#20B2AA"]}
        />
        <div
          className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_10px_0px_#17888a]"> 
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-cyan-00 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3
                className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2
                className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default function About() {
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAP scroll-triggered animation for section heading
    gsap.fromTo(
      headingRef.current,
      { 
        opacity: 0, 
        y: -30,
        scale: 0.9
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Optional: Parallax effect for the entire section
    gsap.to(sectionRef.current, {
      yPercent: -10,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="pt-5 bg-black "
    >
      <h1
        ref={headingRef}
        className="text-5xl font-bold text-white mb-8 px-35">
        About
      </h1>
      <GlowingEffectDemoSecond />
    </section>
  );
}