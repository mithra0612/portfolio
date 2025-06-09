"use client";
import React, { useState, useEffect } from "react";
import { Github, Linkedin } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect"; // adjust path as needed

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const rotatingTexts = [
    "Developer",
    "Problem Solver",
    "Creative Designer",
    "UI/UX Enthusiast",
    "Tech Innovator",
  ];

  // Typewriter effect for rotating texts
  useEffect(() => {
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

  // Scroll handling for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen 
     text-white overflow-x-hidden py-8 "
    >
      <main className="relative z-10">
        <section
          id="home"
          className="flex items-center min-h-[85vh] px-6 lg:px-16 mx-auto mt-0 pt-0 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center justify-between">
              <div className="space-y-8 max-w-4xl">
                <div className="space-y-6">
                  <div className="overflow-hidden">
                    <h1
                      className="text-6xl lg:text-8xl font-black leading-none transform transition-transform duration-1000"
                      style={{
                        transform: `translateY(${scrollY * 0.1}px)`,
                        fontFamily:
                          "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                      }}
                    >
                      <span className="text-base lg:text-5xl text-gray-300">
                        Hi,
                      </span>
                      <span className="block text-white text-4xl lg:text-7xl font-bold mb-0">
                        I'm Madhumithra
                      </span>
                      <span className="block text-2xl lg:text-4xl font-semibold min-w-[200px] text-left mt-3 mb-0 text-gray-400">
                        {displayText}
                        <span
                          className="animate-pulse ml-1"
                          style={{
                            color: "rgb(6, 182, 212)",
                            textShadow: "0 0 10px rgba(6,182,212,0.3)",
                          }}
                        >
                          {isTyping || isDeleting ? "|" : ""}
                        </span>
                      </span>
                    </h1>
                  </div>

                  <p
                    className="text-xl min-w-4xl leading-relaxed text-gray-300"
                    style={{
                      fontFamily:
                        "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                    }}
                  >
                    Engineering impactful digital solutions with a developer's
                    precision and a poet's perspective. I specialize in
                    full-stack development, thrive on solving complex problems,
                    and am exploring AI and cloud to shape intelligent,
                    user-focused experiences.
                  </p>
                </div>

                <div className="flex gap-7 pt-8 items-center">
                  {[
                    { icon: Github, href: "https://github.com/mithra0612" },
                    {
                      icon: Linkedin,
                      href: "https://www.linkedin.com/in/madhumithra-m/",
                    },
                    {
                      icon: () => (
                        <img
                          src="/leetcode.svg"
                          alt="LeetCode"
                          className="w-6 h-6"
                          style={{ transition: "fill 0.3s ease" }}
                        />
                      ),
                      href: "https://leetcode.com/u/mithra_612/",
                    },
                  ].map((social, index) => (
                    <div
                      key={index}
                      className="relative inline-flex items-center justify-center rounded-full p-2"
                    >
                      <GlowingEffect
                        blur={0}
                        borderWidth={2}
                        spread={80}
                        glow={true}
                        disabled={false}
                        proximity={30}
                        inactiveZone={0.01}
                        gradientColors={["#00FFFF", "#00CED1", "#20B2AA"]}
                      />
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-105 text-gray-400 hover:text-cyan-300"
                        style={{
                          background: "transparent",
                          borderColor: "rgba(6,182,212,0.15)",
                          boxShadow: "0 0 10px rgba(6,182,212,0.05)",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.borderColor = "rgba(6,182,212,0.3)";
                          e.target.style.boxShadow =
                            "0 0 15px rgba(6,182,212,0.1)";
                          const img = e.target.querySelector("img");
                          if (img)
                            img.style.filter =
                              "brightness(0) saturate(100%) invert(62%) sepia(74%) saturate(750%) hue-rotate(164deg) brightness(95%) contrast(92%)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.borderColor = "rgba(6,182,212,0.15)";
                          e.target.style.boxShadow =
                            "0 0 10px rgba(6,182,212,0.05)";
                          const img = e.target.querySelector("img");
                          if (img) img.style.filter = "";
                        }}
                      >
                        {typeof social.icon === "function" ? (
                          social.icon()
                        ) : (
                          <social.icon className="w-6 h-6" />
                        )}
                      </a>
                    </div>
                  ))}
                  <div className="relative inline-flex items-center justify-center rounded-full p-2">
                    <GlowingEffect
                      blur={0}
                      borderWidth={2}
                      spread={80}
                      glow={true}
                      disabled={false}
                      proximity={20}
                      inactiveZone={0.01}
                      gradientColors={["#00FFFF", "#00CED1", "#20B2AA"]}
                    />
                    <a
                      href="/resume"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" px-5 py-3 rounded-full border font-semibold  text-gray-400 hover:text-cyan-300"
                      style={{
                        fontFamily:
                          "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                        background: "transparent",
                        // borderColor: "rgba(6,182,212,0.2)",
                        // boxShadow: "0 0 15px rgba(6,182,212,0.08)",
                      }}
                      // onMouseEnter={(e) => {
                      //   e.target.style.borderColor = "rgba(6,182,212,0.4)";
                      //   e.target.style.boxShadow = "0 0 20px rgba(6,182,212,0.15)";
                      //   e.target.classList.add(
                      //     "border-cyan-500/20",
                      //     "shadow-cyan-500/5"
                      //   );
                      //   e.target.style.color = "rgb(6, 182, 212)";
                      //   e.target.style.textShadow =
                      //     "0 0 10px rgba(6,182,212,0.3)";
                      //   e.target.style.fontFamily =
                      //     'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
                      // }}
                   
                    >
                      Resume
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block px-10">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-auto"
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
          </div>
        </section>
      </main>
    </div>
  );
}
