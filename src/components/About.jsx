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
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          {/* Left Side - Profile Image and Typography */}
          <div className="space-y-2">
            {/* Profile Image */}
            <div className="relative w-80 h-96 mx-auto lg:mx-0 mr-0">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent)",
                  maskImage: "linear-gradient(to bottom, black 85%, transparent)",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              />
            </div>

            {/* Large Typography with Typewriter Effect */}
            <div className="flex items-center -mt-24">
              <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight min-h-[80px] flex items-center">
                {displayText}
                <span className="animate-pulse ml-2 text-orange-400">
                  {(isTyping || isDeleting) ? "|" : ""}
                </span>
              </h2>
            </div>
          </div>

          {/* Right Side - Content with Typewriter Effect */}
          <div
            ref={sectionRef}
            className="space-y-8"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Section Heading */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-px bg-orange-400"></div>
                <span className="text-orange-400 text-sm font-medium tracking-wider uppercase">About Me</span>
              </div>
              <h3 className="text-4xl font-bold text-white">Crafting Digital Experiences</h3>
            </div>

            <div className="space-y-8">
              <p className="text-lg text-gray-400 leading-relaxed">
                A junior undergraduate student blending logic and language — solving DSA problems and building full-stack apps with React, Node.js, Express, and MongoDB. When I'm not writing code, I'm writing poetry — both shaped by structure, flow, and meaning.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-orange-400/30 transition-colors duration-300">
                  <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                  <div className="text-gray-400 text-sm">DSA Problems Solved</div>
                </div>
                
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-blue-400/30 transition-colors duration-300">
                  <div className="text-3xl font-bold text-green-400 mb-2">4+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-400/30 transition-colors duration-300">
                  <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
                  <div className="text-gray-400 text-sm">Competitions won</div>
                </div>
                
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-orange-400/30 transition-colors duration-300">
                  <div className="text-3xl font-bold text-green-400 mb-2">3</div>
                  <div className="text-gray-400 text-sm">Published Poems</div>
                </div>
              </div>

              {/* Skills Tags
              <div className="space-y-4">
                <h4 className="text-white font-semibold">Core Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Python', 'Git'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-orange-400/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>

            {/* <div className="pt-8">
              <div className="w-16 h-px bg-white"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}