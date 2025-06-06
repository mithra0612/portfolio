// app/page.jsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
  Menu,
  X,
  Github,
  Linkedin,
  Link,
} from "lucide-react";
// import SkillsSection from "@/components/SkillsSection";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(0); // Track the active project
  const projectRefs = useRef([]); // Refs for each project section

  const rotatingTexts = [
    "Developer",
    "Problem Solver",
    "Creative Designer",
    "UI/UX Enthusiast",
    "Tech Innovator",
  ];

  const projects = [
    {
      event: "College Project",
      year: "2024",
      title: "DASH - Distributed Adaptive Serverless Housing",
      description:
        "DASH offers a peer-to-peer, cost-effective, and efficient alternative for hosting serverless functions. It delivers a seamless experience with adaptive resource allocation.",
      tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Python", "Serverless"],
      live: "https://dash-live-link.com", // TODO: Replace with actual live link
      github: "https://github.com/yourusername/dash-repo", // TODO: Replace with actual repo
    },
    {
      event: "Hackathon",
      year: "2023",
      title: "AI-Powered Chatbot",
      description:
        "A smart chatbot leveraging NLP and machine learning to provide real-time assistance for users, integrated with a modern UI for seamless interaction.",
      tech: ["React.js", "Python", "AI/ML", "Tailwind CSS"],
      live: "https://chatbot-live-link.com", // TODO: Replace with actual live link
      github: "https://github.com/yourusername/chatbot-repo", // TODO: Replace with actual repo
    },
    {
      event: "Personal Project",
      year: "2022",
      title: "Blockchain Voting System",
      description:
        "A secure, transparent voting system built on Ethereum blockchain, ensuring immutability and trust in the voting process.",
      tech: ["Blockchain", "Solidity", "React.js", "ethers"],
      live: "https://blockchain-vote-live.com", // TODO: Replace with actual live link
      github: "https://github.com/yourusername/blockchain-vote-repo", // TODO: Replace with actual repo
    },
  ];

  const allTechStacks = [
    "Next.js", "Angular.js", "React.js", "AI/ML", "Flutter",
    "Tailwind CSS", "TypeScript", ".NET", "Python", "Stable Diffusion",
    "Blockchain", "Solidity", "Tauri", "Peer to Peer", "Serverless",
    "ipfs", "ethers", "C", "Java", "C#",
    "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Kotlin",
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

  // Scroll handling for project visibility
  useEffect(() => {
    // Helper to determine the most visible project
    const updateActiveProject = () => {
      let maxVisible = 0;
      let maxIndex = 0;
      projectRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        // Calculate visible height
        const visible =
          Math.max(0, Math.min(rect.bottom, vh) - Math.max(rect.top, 0));
        if (visible > maxVisible) {
          maxVisible = visible;
          maxIndex = idx;
        }
      });
      setActiveProject(maxIndex);
    };

    const observer = new IntersectionObserver(
      () => {
        updateActiveProject();
      },
      { threshold: Array.from({ length: 11 }, (_, i) => i / 10) }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Set first project as active by default
    setActiveProject(0);

    // Listen to scroll for real-time update
    const handleScroll = () => updateActiveProject();
    window.addEventListener("scroll", handleScroll);

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, [projects.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown" && activeProject < projects.length - 1) {
        projectRefs.current[activeProject + 1]?.scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "ArrowUp" && activeProject > 0) {
        projectRefs.current[activeProject - 1]?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, projects.length]);

  // Scroll handling for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden soft-bg" style={{ backgroundColor: '#090c10' }}>
      <div className="fixed inset-0 soft-bg" style={{ backgroundColor: '#090c10' }}></div>

      <header className="relative z-50 flex justify-between items-center pt-4 pb-2 lg:pt-6 lg:pb-3 backdrop-blur-sm soft-header-shadow">
        <div className="text-2xl font-bold text-white ml-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          Madhumithra
        </div>

        <nav 
          className="hidden md:flex space-x-8 text-lg text-gray-200 mr-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {['Home', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                const el = document.getElementById(item.toLowerCase());
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-gray-200 hover:text-white transition-colors duration-300 relative group bg-transparent border-none outline-none cursor-pointer p-0"
              type="button"
            >
              {item}
              <span 
                className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full soft-blue-bg"
                style={{ backgroundColor: '#3b82f6' }}
              ></span>
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-white z-50 relative mr-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="fixed inset-0 soft-bg backdrop-blur-lg z-40 flex items-center justify-center soft-header-shadow">
            <nav className="flex flex-col space-y-8 text-center">
              {['Home', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setIsMenuOpen(false);
                    const el = document.getElementById(item.toLowerCase());
                    if (el) {
                      setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
                    }
                  }}
                  className="text-2xl text-white transition-colors duration-300 bg-transparent border-none outline-none cursor-pointer p-0"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  type="button"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section id="home" className="flex items-center min-h-[85vh] px-6 lg:px-16 mx-15 mt-0 pt-0 relative overflow-hidden">
          {/* Minimalistic blue dot accent in top left */}
          <span className="home-accent-corner" />
          {/* Subtle blue glow in bottom right */}
          <span className="home-glow-corner" />
          {/* Futuristic grid background */}
          <span className="home-grid-bg" />
          {/* Animated floating blue ring */}
          <span className="home-floating-ring" />
          {/* Animated blue line under name */}
          {/* <span className="home-underline-anim" /> */}
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex items-center">
              <div className="space-y-8 max-w-4xl">
                <div className="space-y-6">
                  <div className="overflow-hidden">
                    <h1
                      className="text-6xl lg:text-8xl font-black leading-none transform transition-transform duration-1000"
                      style={{ 
                        transform: `translateY(${scrollY * 0.1}px)`,
                        fontFamily: "'Playfair Display', serif",
                        color: '#fff'
                      }}
                    >
                      <span 
                        className="text-base lg:text-5xl"
                        style={{ color: '#d1d5db' }}
                      >
                        Hi,
                      </span>
                      <span className="block text-white text-4xl lg:text-7xl font-bold mb-0">
                        I'm Madhumithra
                      </span>
                      <span 
                        className="block text-2xl lg:text-4xl font-semibold min-w-[200px] text-left mt-3 mb-0"
                        style={{ color: '#3b82f6' }}
                      >
                        {displayText}
                        <span 
                          className="animate-pulse ml-1"
                          style={{ color: '#3b82f6' }}
                        >
                          {isTyping || isDeleting ? "|" : ""}
                        </span>
                      </span>
                    </h1>
                  </div>

                  <p 
                    className="text-xl min-w-4xl leading-relaxed"
                    style={{ 
                      color: '#d1d5db',
                      fontFamily: "'Playfair Display', serif"
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
                    { icon: Linkedin, href: "https://www.linkedin.com/in/madhumithra-m/" },
                    { 
                      icon: () => (
                        <img src="/leetcode.svg" alt="LeetCode" className="w-6 h-6" />
                      ), 
                      href: "https://leetcode.com/u/mithra_612/" 
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-110"
                      style={{ 
                        borderColor: '#3b82f6',
                        color: '#d1d5db',
                        background: 'rgba(20,24,30,0.7)'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#fff';
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.background = 'rgba(59,130,246,0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#d1d5db';
                        e.target.style.borderColor = '#3b82f6';
                        e.target.style.background = 'rgba(20,24,30,0.7)';
                      }}
                    >
                      {typeof social.icon === "function" ? (
                        social.icon()
                      ) : (
                        <social.icon className="w-6 h-6" />
                      )}
                    </a>
                  ))}
                  <a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 px-7 py-3 rounded-full border font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
                    style={{ 
                      borderColor: '#3b82f6',
                      color: '#3b82f6',
                      fontFamily: "'Playfair Display', serif",
                      background: 'rgba(20,24,30,0.7)'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#3b82f6';
                      e.target.style.color = '#090c10';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#3b82f6';
                    }}
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="px-6 lg:px-16 py-16 min-h-screen">
          <div className="max-w-7xl mx-auto w-full">
            <h2
              className="text-4xl lg:text-6xl font-bold mb-16 text-center"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#fff',
                borderBottom: '2px solid #3b82f6',
                display: 'inline-block',
                paddingBottom: '0.25em',
              }}
            >
              Projects
            </h2>
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left: Projects (Vertically Scrollable, One at a Time) */}
              <div
                className="lg:w-3/4 snap-y snap-mandatory overflow-y-auto scrollbar-hide soft-bg"
                style={{
                  height: "60vh",
                  borderRadius: '1rem',
                  border: '1px solid #1e293b',
                }}
              >
                {projects.map((project, index) => (
                  <div
                    key={index}
                    ref={(el) => (projectRefs.current[index] = el)}
                    className={`relative bg-[#10141a]/80 backdrop-blur-md rounded-lg p-6 min-h-[60vh] h-[60vh] flex flex-col md:flex-row md:items-center items-center snap-center transition-all duration-300 ease-in-out w-full project-card-glow minimal-hover`}
                    style={{
                      marginBottom: index !== projects.length - 1 ? "0px" : undefined,
                      border: 'none',
                      outline: 'none',
                      background: 'rgba(16,20,26,0.8)'
                    }}
                  >
                    {/* Glow effect in bottom right corner */}
                    <span className="project-glow-corner" />
                    {/* Minimalistic top left accent */}
                    <span className="project-accent-corner" />
                    {/* Project Preview Image to the Left */}
                    <div
                      className="w-full md:w-2/3 h-64 md:h-80 rounded-lg mb-6 md:mb-0 md:mr-8 flex items-center justify-center md:justify-center overflow-hidden self-center"
                      style={{ backgroundColor: '#10141a', border: '1px solid #1e293b' }}
                    >
                      {/* Placeholder for project image/preview */}
                      <span className="text-gray-400 text-lg text-center w-full px-4" style={{ color: '#d1d5db' }}>
                        Project Preview
                      </span>
                    </div>
                    {/* Project Details to the Right */}
                    <div className="w-full md:w-1/2 max-w-2xl mx-auto flex flex-col justify-center">
                      <h3
                        className="text-2xl lg:text-3xl font-semibold mb-3 text-left"
                        style={{
                          color: '#fff',
                          fontFamily: "'Playfair Display', serif",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-base text-justify mb-2"
                        style={{
                          color: '#d1d5db',
                          fontFamily: "'Playfair Display', serif",
                        }}
                      >
                        {project.description}
                      </p>
                      {/* Add the links below the description */}
                      <div className="flex justify-start items-center mt-4 gap-2">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border transition-all duration-300 hover:bg-[#3b82f6] hover:text-[#090c10] hover:border-[#3b82f6] border-[#3b82f6] text-[#3b82f6] flex items-center justify-center"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                            title="Live Demo"
                          >
                            <Link size={20} />
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border transition-all duration-300 hover:bg-[#60a5fa] hover:text-[#090c10] hover:border-[#60a5fa] border-[#60a5fa] text-[#60a5fa] flex items-center justify-center"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                            title="GitHub Repo"
                          >
                            <Github size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: Tech Stack (Fixed) */}
              <div className="lg:w-1/4">
                <div className="sticky top-16">
                  <h3
                    className="text-2xl font-semibold mb-6"
                    style={{
                      color: '#fff',
                      fontFamily: "'Playfair Display', serif",
                    }}
                  >
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3 transition-all duration-300">
                    {allTechStacks.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
                        style={{
                          backgroundColor: projects[activeProject]?.tech.includes(tech)
                            ? '#3b82f6'
                            : '#10141a',
                          color: projects[activeProject]?.tech.includes(tech)
                            ? '#fff'
                            : '#d1d5db',
                          fontFamily: "'Playfair Display', serif",
                          border: projects[activeProject]?.tech.includes(tech)
                            ? '1px solid #3b82f6'
                            : '1px solid #1e293b',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="skills">
          <SkillsSection />
        </section> */}

        <section id="contact" className="min-h-screen px-6 lg:px-16 py-16 soft-bg">
          <div className="max-w-7xl mx-auto w-full">
            <h2
              className="text-4xl lg:text-6xl font-bold mb-16 text-center"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: '#fff',
                borderBottom: '2px solid #3b82f6',
                display: 'inline-block',
                paddingBottom: '0.25em',
              }}
            >
              Contact
            </h2>
          </div>
        </section>
      </main>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }
        
        /* Hide scrollbar for a cleaner look */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .soft-bg {
          background: linear-gradient(135deg, #090c10 0%, #10141a 100%);
        }
        .soft-header-shadow {
          box-shadow: 0 2px 16px #1e293b33;
        }
        .active-project-border {
          border: 2px solid #3b82f6 !important;
          background: rgba(59,130,246,0.08) !important;
        }
        .project-glow-corner {
          position: absolute;
          right: 0.75rem;
          bottom: 0.75rem;
          width: 60px;
          height: 60px;
          border-bottom-right-radius: 1rem;
          pointer-events: none;
          background: radial-gradient(ellipse at bottom right, #3b82f6 0%, transparent 70%);
          opacity: 0.45;
          z-index: 1;
        }
        .project-accent-corner {
          position: absolute;
          left: 0.75rem;
          top: 0.75rem;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 60%, transparent 100%);
          opacity: 0.18;
          z-index: 1;
        }
        .home-accent-corner {
          position: absolute;
          left: 1.5rem;
          top: 1.5rem;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6 60%, transparent 100%);
          opacity: 0.16;
          z-index: 2;
        }
        .home-glow-corner {
          position: absolute;
          right: 2.5rem;
          bottom: 2.5rem;
          width: 120px;
          height: 120px;
          border-bottom-right-radius: 2rem;
          pointer-events: none;
          background: radial-gradient(ellipse at bottom right, #3b82f6 0%, transparent 70%);
          opacity: 0.22;
          z-index: 2;
        }
        .home-grid-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image: repeating-linear-gradient(90deg, rgba(59,130,246,0.04) 0 1px, transparent 1px 80px), repeating-linear-gradient(180deg, rgba(59,130,246,0.04) 0 1px, transparent 1px 80px);
          pointer-events: none;
        }
        .home-floating-ring {
          position: absolute;
          left: 10vw;
          top: 60%;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 2.5px solid #3b82f6;
          opacity: 0.13;
          filter: blur(1.5px);
          animation: floatRing 5s ease-in-out infinite;
          z-index: 2;
        }
        @keyframes floatRing {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-18px) scale(1.08); }
        }
        .home-underline-anim {
          position: absolute;
          left: 2.5rem;
          top: 8.5rem;
          width: 180px;
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%);
          opacity: 0.18;
          animation: underlineGlow 2.5s ease-in-out infinite alternate;
          z-index: 2;
        }
        @keyframes underlineGlow {
          0% { filter: blur(0.5px) brightness(1); opacity: 0.18; }
          100% { filter: blur(2.5px) brightness(1.5); opacity: 0.32; }
        }
        /* ...existing styles... */
      `}</style>
    </div>
  );
}