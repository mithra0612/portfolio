"use client";
import React, { useRef, useState, useEffect } from "react";
import { Link, Github } from "lucide-react";

const Projects = () => {
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

  const projectRefs = useRef([]);
  const [activeProject, setActiveProject] = useState(0);
  const headingRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer to detect which project is currently visible
  useEffect(() => {
    if (!containerRef.current) return;

    const observerCallback = (entries) => {
      let maxIntersectionRatio = 0;
      let activeIndex = 0;

      entries.forEach((entry, index) => {
        if (entry.intersectionRatio > maxIntersectionRatio) {
          maxIntersectionRatio = entry.intersectionRatio;
          activeIndex = projectRefs.current.findIndex(ref => ref === entry.target);
        }
      });

      if (maxIntersectionRatio > 0.3) { // Only update if significantly visible
        setActiveProject(activeIndex);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: containerRef.current,
      threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
      rootMargin: '-10% 0px -10% 0px',
    });

    // Observe all project elements
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Handle scroll events as backup
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      
      // Calculate which project should be active based on scroll position
      const projectHeight = containerHeight; // Each project takes full height
      const currentIndex = Math.round(scrollTop / projectHeight);
      
      if (currentIndex >= 0 && currentIndex < projects.length && currentIndex !== activeProject) {
        setActiveProject(currentIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [activeProject, projects.length]);

  return (
    <section id="projects" className=" lg:px-16 py-30 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <h2
          ref={headingRef}
          className="text-5xl font-bold text-white mb-8 px-6 lg:px-0 py-10"
          style={{
            display: 'inline-block',
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
          }}
        >
          Projects
        </h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div
            ref={containerRef}
            className="lg:w-3/4 snap-y snap-mandatory overflow-y-auto soft-bg"
            style={{
              height: "60vh",
              borderRadius: '1rem',
              scrollbarWidth: 'none', // Hide scrollbar for Firefox
              msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
            }}
          >
            <style>
              {`
                .soft-bg::-webkit-scrollbar {
                  display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
                }
              `}
            </style>
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (projectRefs.current[index] = el)}
                className={`relative backdrop-blur-md rounded-lg p-6 min-h-[60vh] h-[60vh] flex flex-col md:flex-row md:items-center items-center snap-center transition-all duration-300 ease-in-out w-full project-card-glow minimal-hover`}
                style={{
                  marginBottom: index !== projects.length - 1 ? "0px" : undefined,
                  border: 'none',
                  outline: 'none',
                }}
              >
                {/* Glow effect in bottom right corner */}
                <span className="project-glow-corner" />
                {/* Minimalistic top left accent */}
                <span className="project-accent-corner" />
                {/* Project Preview Image to the Left */}
                <div
                  className="w-full md:w-3/4 h-64 md:h-80 rounded-lg mb-6 flex items-center justify-center overflow-hidden self-center mx-10"
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
                      fontFamily:
                        "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-base text-justify mb-2 break-words"
                    style={{
                      color: '#d1d5db',
                      fontFamily:
                        "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
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
                        className="p-2 rounded-full border transition-all duration-300 hover:bg-cyan-400 hover:text-[#090c10] hover:border-cyan-400 border-cyan-400 text-cyan-400 flex items-center justify-center"
                        style={{
                          fontFamily:
                            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                        }}
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
                        className="p-2 rounded-full border transition-all duration-300 hover:bg-[#38bdf8] hover:text-[#090c10] hover:border-[#38bdf8] border-[#38bdf8] text-[#38bdf8] flex items-center justify-center"
                        style={{
                          fontFamily:
                            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                        }}
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
                  fontFamily:
                    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                }}
              >
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3 transition-all duration-300">
                {allTechStacks.map((tech, index) => {
                  const isActive = projects[activeProject]?.tech.includes(tech);
                  return (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                        isActive ? 'bg-cyan-400 text-black border-cyan-400' : 'bg-[#10141a] text-gray-300 border-gray-700'
                      }`}
                      style={{
                        backgroundColor: isActive ? '#22d3ee' : '#10141a',
                        color: isActive ? '#000' : '#d1d5db',
                        border: isActive ? '1px solid #22d3ee' : '1px solid #1e293b',
                        // Removed boxShadow for glow effect
                        fontFamily:
                          "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;