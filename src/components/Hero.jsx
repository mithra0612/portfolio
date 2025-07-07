"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Github, Linkedin, Mail } from "lucide-react";

// Custom LeetCode Icon Component
const LeetCodeIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    fill="currentColor"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z" />
  </svg>
);

// Utility function for className merging
const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// FlipWords Component
const FlipWords = ({
  words,
  duration = 3000,
  className
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 leading-tight font-bold",
          className
        )}
        key={currentWord}>
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={word + wordIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: wordIndex * 0.3,
              duration: 0.3,
            }}
            className="inline-block whitespace-nowrap">
            {word.split("").map((letter, letterIndex) => (
              <motion.span
                key={word + letterIndex}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wordIndex * 0.3 + letterIndex * 0.05,
                  duration: 0.2,
                }}
                className="inline-block text-blue-500">
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

const Hero = () => {
  const flipWords = [
    "line by line.",
    "pixel by pixel.",
    "problem to product.",
    "logic and poetry.",
    "art in execution.",
  ];
  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Code block background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top edge blocks */}
        <div className="absolute top-4 left-8 w-16 h-2 bg-white opacity-20"></div>
        <div className="absolute top-8 left-28 w-24 h-2 bg-blue-500 opacity-30"></div>
        <div className="absolute top-12 left-12 w-12 h-2 bg-green-400 opacity-15"></div>
        <div className="absolute top-6 left-60 w-32 h-2 bg-blue-500 opacity-20"></div>
        <div className="absolute top-16 left-80 w-20 h-2 bg-white opacity-30"></div>
        
        {/* Top right blocks */}
        <div className="absolute top-4 right-8 w-28 h-2 bg-blue-500 opacity-25"></div>
        <div className="absolute top-10 right-40 w-16 h-2 bg-green-300 opacity-12"></div>
        <div className="absolute top-16 right-16 w-36 h-2 bg-blue-500 opacity-30"></div>
        <div className="absolute top-20 right-60 w-14 h-2 bg-white opacity-25"></div>
        
        {/* Left edge blocks */}
        <div className="absolute left-4 top-32 w-2 h-20 bg-white opacity-20"></div>
        <div className="absolute left-8 top-60 w-2 h-16 bg-blue-500 opacity-25"></div>
        <div className="absolute left-12 top-96 w-2 h-24 bg-green-400 opacity-18"></div>
        <div className="absolute left-6 top-[28rem] w-2 h-12 bg-blue-500 opacity-20"></div>
        
        {/* Right edge blocks */}
        <div className="absolute right-4 top-40 w-2 h-18 bg-blue-500 opacity-25"></div>
        <div className="absolute right-8 top-72 w-2 h-20 bg-white opacity-20"></div>
        <div className="absolute right-12 top-[26rem] w-2 h-16 bg-green-300 opacity-16"></div>
        <div className="absolute right-6 top-[32rem] w-2 h-14 bg-blue-500 opacity-20"></div>
        
        {/* Bottom edge blocks */}
        <div className="absolute bottom-4 left-16 w-20 h-2 bg-white opacity-20"></div>
        <div className="absolute bottom-8 left-48 w-32 h-2 bg-blue-500 opacity-25"></div>
        <div className="absolute bottom-12 left-96 w-18 h-2 bg-green-400 opacity-14"></div>
        <div className="absolute bottom-6 left-[32rem] w-24 h-2 bg-blue-500 opacity-20"></div>
        
        {/* Bottom right blocks */}
        <div className="absolute bottom-4 right-12 w-28 h-2 bg-blue-500 opacity-25"></div>
        <div className="absolute bottom-10 right-44 w-16 h-2 bg-white opacity-20"></div>
        <div className="absolute bottom-16 right-24 w-36 h-2 bg-green-300 opacity-12"></div>
        <div className="absolute bottom-20 right-72 w-14 h-2 bg-white opacity-25"></div>
        
        {/* Corner accent blocks */}
        <div className="absolute top-24 left-24 w-8 h-8 bg-blue-500 opacity-15"></div>
        <div className="absolute top-32 right-32 w-6 h-6 bg-green-400 opacity-10"></div>
        <div className="absolute bottom-24 left-32 w-10 h-4 bg-blue-500 opacity-20"></div>
        <div className="absolute bottom-32 right-24 w-8 h-6 bg-green-300 opacity-12"></div>
        
        {/* Scattered small blocks */}
        <div className="absolute top-[40%] left-4 w-4 h-2 bg-white opacity-15"></div>
        <div className="absolute top-[60%] right-4 w-6 h-2 bg-green-400 opacity-10"></div>
        <div className="absolute top-[25%] left-2 w-2 h-8 bg-blue-500 opacity-15"></div>
        <div className="absolute top-[75%] right-2 w-2 h-6 bg-green-300 opacity-14"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-20 flex items-center justify-start min-h-screen px-12 pl-16 lg:pl-60">
        <div className="text-left max-w-4xl">
          {/* Hero heading */}
          <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight tracking-tight text-white">
              <strong>I build with code and create with intention</strong>
            <div className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl flex items-center font-medium">
              <FlipWords
                words={flipWords}
                duration={3000}
                className="font-black text-4xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight"
              />
            </div>
          </h1>

          {/* CTA Link */}
          <div className="flex justify-start items-center gap-8 mt-8">
            <a
              href="/resume"
              target="_blank"
              className="inline-block text-sm md:text-base font-medium leading-tight tracking-tight text-white no-underline relative group transition-all duration-500 ease-out hover:text-green-400"
               onClick={handleDownload}
            >
              DOWNLOAD RESUME
              <span className="absolute -bottom-2 left-0 w-8 h-px bg-gray-400 transition-all duration-500 ease-out group-hover:w-full group-hover:bg-green-400"></span>
            </a>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/mithra0612"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/madhumithra-m"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://leetcode.com/u/mithra_612"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-green-400 transition-colors duration-300"
              >
                <LeetCodeIcon size={20} />
              </a>
              <a
                href="mailto:mithramadhu005.email@gmail.com"
                className="text-white hover:text-green-400 transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none"></div>

      {/* Custom styles for enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(12deg);
          }
          50% {
            transform: translateY(-20px) rotate(12deg);
          }
        }

        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0px) rotate(-12deg);
          }
          50% {
            transform: translateY(-15px) rotate(-12deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
        }

        /* Enhanced text rendering for effects */
        .typewriter-text {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          transform-origin: center;
        }

        /* Cursor animation */
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        .cursor-blink {
          animation: blink 1s infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          h1 {
            line-height: 1.1;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;