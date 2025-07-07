"use client";
import React, { useState, useEffect, useRef } from "react";

export default function AboutMeSection() {
  const [scrollY, setScrollY] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const sectionRef = useRef(null);

  const rotatingTexts = [
    "Fullstack Developer",
    "Problem Solver",
    "DSA Enthusiast",
    "Designer",
    "Poet",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isTyping && !isDeleting) {
          setIsTyping(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isTyping, isDeleting]);

  // Typewriter effect for rotating texts
  useEffect(() => {
    if (!isTyping && !isDeleting) return;

    const currentWord = rotatingTexts[currentTextIndex];

    const typewriterEffect = () => {
      if (isTyping && !isDeleting) {
        if (charIndex < currentWord.length) {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => {
            setIsDeleting(true);
            setIsTyping(false);
          }, 2000);
        }
      } else if (isDeleting) {
        if (charIndex > 0) {
          setDisplayText(currentWord.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(typewriterEffect, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentTextIndex, charIndex, isTyping, isDeleting, rotatingTexts]);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-7xl font-bold pb-6 sm:pb-10 mt-10 sm:mt-10 text-blue-400">
          About Me
        </h1>

        <div className="grid p-2 lg:flex lg:gap-36 items-center gap-8">
          {/* Left Side - Profile Image */}
          <div className="">
            {/* Profile Image */}
            <div className="relative w-80 h-96 mx-auto lg:mx-0">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 85%, transparent)",
                  maskImage:
                    "linear-gradient(to bottom, black 85%, transparent)",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              />
            </div>
          </div>

          {/* Right Side - Content with Typography and Stats */}
          <div
            ref={sectionRef}
            className="space-y-8"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Large Typography with Typewriter Effect */}
            <div className="flex items-center">
              <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight min-h-[80px] flex items-center">
                {displayText}
                <span className="animate-pulse ml-2 text-orange-400">
                  {isTyping || isDeleting ? "|" : ""}
                </span>
              </h2>
            </div>

            <div className="space-y-8">
              <p className="text-lg text-gray-400 leading-relaxed">
                A passionate full-stack developer and junior Computer Science
                student, well-versed in solving DSA problems and building
                end-to-end web applications with the MERN stack. I approach each
                problem with a mix of logic, creativity, and attention to detail
                — whether it's backend APIs or frontend experiences.
              </p>

              {/* Stats - Text Only */}
              <div className="grid grid-cols-2 gap-x- gap-y-6 pt-4">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-green-400">500+</span>
                  <span className="text-lg text-gray-300 font-medium mt-1">
                    DSA Problems Solved
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-green-400">4+</span>
                  <span className="text-lg text-gray-300 font-medium mt-1">
                    Projects Completed
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-green-400">3+</span>
                  <span className="text-lg text-gray-300 font-medium mt-1">
                    Competitions Won
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-green-400">3</span>
                  <span className="text-lg text-gray-300 font-medium mt-1">
                    Published Poems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
