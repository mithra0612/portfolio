"use client";
import {
  Box,
  Lock,
  Search,
  Settings,
  Sparkles,
  Instagram,
  Feather,
  Newspaper,
} from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useEffect, useRef, useState } from "react";
import CardSwapComponent from "./CardSwap";
import RotatingQuote from "./ui/rotating-quote";
import Terminal from "@/components/terminal";

export function GlowingEffectDemoSecond() {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index;
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => new Set([...prev, parseInt(index)]));
            }, parseInt(index) * 150); // Stagger animation
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    const gridItems = gridRef.current?.querySelectorAll("[data-index]");
    gridItems?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <ul
        ref={gridRef}
        className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[30-rem] xl:grid-rows-3"
      >
        <GridItem
          index={0}
          area="md:[grid-area:1/1/3/7] xl:[grid-area:1/1/3/7]"
          isVisible={visibleItems.has(0)}
          icon={
            <div className="flex items-center gap-2 mb-3">
              <Box className="h-6 w-6 text-black dark:text-neutral-400" />
              <span className="text-lg font-semibold text-white">
                Some of my works
              </span>
              <button
                className="absolute top-0 right-0 text-sm font-medium text-gray-400 hover:underline flex items-center gap-1 transition-colors hover:text-cyan-400"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View More <span>&rarr;</span>
              </button>
            </div>
          }
          description={
            <div className="relative">
              <CardSwapComponent />
            </div>
          }
        />
        <GridItem
          index={1}
          area="md:[grid-area:1/7/2/13] xl:[grid-area:1/7/2/13]"
          isVisible={visibleItems.has(1)}
          description={<Terminal />}
          className="!p-0"
        />
        <GridItem
          index={2}
          area="md:[grid-area:2/7/3/10] xl:[grid-area:2/7/3/10]"
          isVisible={visibleItems.has(2)}
          description={
            <div>
              <h2 className="pb-5">LeetCode Statistics</h2>
              <img
                src="https://leetcard.jacoblin.cool/mithra_612?theme=transparent&font=Mali&"
                alt="LeetCode Stats"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <button
                className="text-sm font-medium text-gray-400 hover:underline flex items-center gap-1 mt-2 transition-colors hover:text-cyan-400 pt-10"
                onClick={() =>
                  window.open(
                    "https://leetcode.com/mithra_612",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
              >
                View My Profile <span>&rarr;</span>
              </button>
            </div>
          }
        />
        <GridItem
          index={3}
          area="md:[grid-area:2/10/3/13] xl:[grid-area:2/10/3/13]"
          isVisible={visibleItems.has(3)}
          icon={
            <Feather className="h-6 w-6 text-black dark:text-neutral-400" />
          }
          title="Other Interests"
          description={
            <>
              Passionate about weaving emotions into words, I explore life's
              nuances through reflective and rhythmic poetry.
              <button
                className="text-sm font-medium text-gray-400 hover:underline flex items-center gap-1 mt-2 transition-colors hover:text-cyan-400"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/p.oet.ry_diary/",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
              >
                View More <span>&rarr;</span>
              </button>
            </>
          }
        />
      </ul>
    </div>
  );
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  className = "",
  index,
  isVisible,
}) => {
  return (
    <li
      data-index={index}
      className={`
        min-h-[14rem] list-none ${area}
        transform transition-all duration-700 ease-out
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-16 scale-95"
        }
      `}
    >
      <div
        className={`
          relative h-full rounded-2xl border p-1 md:rounded-3xl md:p-2 ${className}
          transform transition-all duration-300 ease-out
        `}
      >
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
          className={`
            border-0.75 relative flex h-full flex-col justify-between gap-3 
            overflow-hidden rounded-xl p-3 md:p-4 
            dark:shadow-[0px_0px_10px_0px_#17888a]
            transition-all duration-300 ease-out
          `}
        >
          <div className="relative flex flex-1 flex-col justify-between gap-2">
            {icon && (
              <div
                className="
                  w-fit rounded-lg border border-cyan-00 p-2
                  transition-all duration-300 ease-out
                "
              >
                {icon}
              </div>
            )}
            <div className="space-y-2">
              {title && (
                <h3
                  className="
                    -tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold 
                    text-balance text-black md:text-2xl/[1.875rem] dark:text-white
                    transition-all duration-300 ease-out
                  "
                >
                  {title}
                </h3>
              )}
              <div
                className="
                  font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] 
                  dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold
                  transition-all duration-300 ease-out
                "
              >
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default function About() {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`
        pt-5 bg-black mb-0
        transform transition-all duration-1000 ease-out
        ${
          sectionVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }
      `}
    >
      <div
        className={`
          transform transition-all duration-1200 ease-out delay-200
          ${
            sectionVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-98"
          }
        `}
      >
        <GlowingEffectDemoSecond />
      </div>
    </section>
  );
}
