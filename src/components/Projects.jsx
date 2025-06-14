"use client";
import React, { useRef, useState, useEffect } from "react";
import { Link, Github } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projects = [
    {
      event: "Personal Project",
      year: "2025",
      title: "AI-Based Financial Services Platform for India Post",
      description:
        "An AI-driven platform that leverages demographic and economic cycle analysis to deliver personalized financial service recommendations for India Post services and schemes, promoting financial inclusion across diverse populations in India.",
      tech: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Selenium WebDriver",
        "BeautifulSoup4",
        "Python",
        "Pandas",
        "NumPy",
      ],
      live: "",
      github: "https://github.com/mithra0612/post-office-financial-service",
      previewImage: "/financial-services-preview.png",
    },
    {
      event: "Personal Project",
      year: "2025",
      title: "Wellcare: AI-Based Women's Health and Wellness Platform",
      description:
        "A comprehensive digital platform focused on women's health and wellness education, offering features like period and ovulation tracking, a symptoms tracker, an AI-powered diet recommendation system, gamified myth-busting, and an interactive chatbot for health-related queries.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "Firestore",
        "Google Cloud Platform",
        "TensorFlow",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Redux",
      ],
      live: "https://women-app.vercel.app/",
      github: "https://github.com/mithra0612/women-app",
      previewImage: "/wellcare.png",
    },
    {
      event: "Personal Project",
      year: "2025",
      title: "Growth Guardian – AI-Driven Financial Literacy Platform",
      description:
        "A robust platform aimed at enhancing financial literacy and preventing scams, equipped with educational modules, an investment simulator, a machine learning-powered asset return forecasting model, a budget planner, and a scam prevention chatbot for real-time user support.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "TensorFlow",
        "Scikit-learn",
        "JavaScript",
        "HTML5",
        "CSS3",
        "MongoDB",
      ],
      live: "https://growth-guardian.vercel.app/",
      github: "https://github.com/mithra0612/growth-guardian",
      previewImage: "/growth-guardian.png",
    },
    {
      event: "Personal Project",
      year: "2025",
      title: "Second-Hand Car Buying and Selling Platform",
      description:
        "A streamlined, user-friendly platform designed to simplify the process of buying and selling second-hand cars, featuring intuitive browsing, comparison tools, and a responsive interface for enhanced user experience.",
      tech: ["React.js", "Node.js", "HTML5", "CSS3", "JavaScript", "Axios", "Express.js"],
      live: "",
      github: "https://github.com/mithra0612/CAR_MARKET",
      previewImage: "/car-market.png",
    },
  ];

  const allTechStacks = [
    "React.js",
    "Node.js",
    "Express.js",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Selenium WebDriver",
    "BeautifulSoup4",
    "Python",
    "Pandas",
    "NumPy",
    "Firestore",
    "Google Cloud Platform",
    "TensorFlow",
    "Scikit-learn",
    "Axios",
    "Redux",
    "MongoDB",
  ];

  const projectRefs = useRef([]);
  const mobileProjectRefs = useRef([]);
  const [activeProject, setActiveProject] = useState(0);
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ image: "", link: "" });
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile GSAP animations
  useEffect(() => {
    if (!isMobile) return;

    // Clear any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Animate each project card on mobile
    mobileProjectRefs.current.forEach((projectRef, index) => {
      if (projectRef) {
        // Initial state
        gsap.set(projectRef, {
          opacity: 0,
          y: 100,
          scale: 0.9,
        });

        // Animate in
        gsap.to(projectRef, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectRef,
            start: "top 85%",
            end: "top 15%",
            toggleActions: "play none none reverse",
          },
        });

        // Animate project image
        const imageElement = projectRef.querySelector('.project-image');
        if (imageElement) {
          gsap.set(imageElement, {
            scale: 0.8,
            opacity: 0,
          });

          gsap.to(imageElement, {
            scale: 1,
            opacity: 1,
            duration: 1,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: projectRef,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          });
        }

        // Animate project content
        const contentElement = projectRef.querySelector('.project-content');
        if (contentElement) {
          gsap.set(contentElement, {
            opacity: 0,
            y: 30,
          });

          gsap.to(contentElement, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: projectRef,
              start: "top 75%",
              end: "top 25%",
              toggleActions: "play none none reverse",
            },
          });
        }

        // Animate tech stack tags
        const techTags = projectRef.querySelectorAll('.tech-tag');
        techTags.forEach((tag, tagIndex) => {
          gsap.set(tag, {
            opacity: 0,
            x: -20,
            scale: 0.8,
          });

          gsap.to(tag, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.4,
            delay: 0.6 + (tagIndex * 0.1),
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: projectRef,
              start: "top 70%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          });
        });

        // Animate action buttons
        const actionButtons = projectRef.querySelectorAll('.action-button');
        actionButtons.forEach((button, buttonIndex) => {
          gsap.set(button, {
            opacity: 0,
            scale: 0,
            rotation: 180,
          });

          gsap.to(button, {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.5,
            delay: 0.8 + (buttonIndex * 0.1),
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: projectRef,
              start: "top 65%",
              end: "top 35%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobile]);

  // Intersection Observer to detect which project is currently visible (Desktop only)
  useEffect(() => {
    if (!containerRef.current || isMobile) return;

    const observerCallback = (entries) => {
      let maxIntersectionRatio = 0;
      let activeIndex = 0;

      entries.forEach((entry, index) => {
        if (entry.intersectionRatio > maxIntersectionRatio) {
          maxIntersectionRatio = entry.intersectionRatio;
          activeIndex = projectRefs.current.findIndex((ref) => ref === entry.target);
        }
      });

      if (maxIntersectionRatio > 0.3) {
        setActiveProject(activeIndex);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: containerRef.current,
      threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
      rootMargin: "-10% 0px -10% 0px",
    });

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  // Handle scroll events as backup (Desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const projectHeight = containerHeight;
      const currentIndex = Math.round(scrollTop / projectHeight);

      if (currentIndex >= 0 && currentIndex < projects.length && currentIndex !== activeProject) {
        setActiveProject(currentIndex);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeProject, projects.length, isMobile]);

  // GSAP animations for image hover (Desktop only)
  useEffect(() => {
    if (isMobile) return;

    imageRefs.current.forEach((image) => {
      if (image) {
        gsap.set(image, { scale: 1 });

        const handleMouseEnter = () => {
          gsap.to(image, {
            scale: 1.1,
            duration: 0.3,
            ease: "power3.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.3,
            ease: "power3.out",
          });
        };

        image.addEventListener("mouseenter", handleMouseEnter);
        image.addEventListener("mouseleave", handleMouseLeave);

        image._handleMouseEnter = handleMouseEnter;
        image._handleMouseLeave = handleMouseLeave;
      }
    });

    return () => {
      imageRefs.current.forEach((image) => {
        if (image) {
          image.removeEventListener("mouseenter", image._handleMouseEnter);
          image.removeEventListener("mouseleave", image._handleMouseLeave);
        }
      });
    };
  }, [isMobile]);

  const openModal = (image, link) => {
    setModalContent({ image, link });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="lg:px-16 py-30 min-h-screen">
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden mx-4"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalContent.image}
              alt="Project Preview"
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full">
        <h2
          ref={headingRef}
          className="text-4xl sm:text-5xl font-bold text-white mb-8 px-6 lg:px-0 py-10"
          style={{
            display: "inline-block",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
          }}
        >
          Projects
        </h2>

        {/* Mobile Layout - With GSAP Animations */}
        {isMobile ? (
          <div className="px-4">
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  ref={(el) => (mobileProjectRefs.current[index] = el)}
                  className="relative backdrop-blur-md rounded-xl p-4 bg-[#10141a]/30 border border-gray-700/30 shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(16, 20, 26, 0.4), rgba(16, 20, 26, 0.2))",
                  }}
                >
                  {/* Subtle glow effects */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent rounded-full blur-xl" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400/10 to-transparent rounded-full blur-xl" />
                  
                  {/* Project Image - Full display priority */}
                  <div
                    className="project-image w-full rounded-xl mb-6 overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] shadow-2xl"
                    style={{ 
                      aspectRatio: "16/10", // Maintain consistent aspect ratio
                      backgroundColor: "#0f172a",
                      border: "1px solid rgba(99, 102, 241, 0.2)",
                    }}
                    onClick={() => openModal(project.previewImage, project.live)}
                  >
                    <img
                      src={project.previewImage}
                      alt={`Preview of ${project.title}`}
                      className="w-full h-full object-contain bg-gray-900/50"
                      style={{ 
                        filter: "brightness(0.95) contrast(1.05)",
                        objectFit: "contain", // Ensure entire image is visible
                      }}
                    />
                  </div>

                  {/* Project Details */}
                  <div className="project-content relative z-10 space-y-4">
                    <div>
                      <h3
                        className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent leading-tight"
                        style={{
                          fontFamily:
                            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm text-gray-300 leading-relaxed"
                        style={{
                          fontFamily:
                            "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                        }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech stack for this project */}
                    <div>
                      <h4 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="tech-tag relative px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-400/20 to-blue-400/20 text-gray-200 border border-cyan-400/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
                            style={{
                              fontFamily:
                                "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full" />
                            <span className="relative z-10">{tech}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex justify-start items-center gap-3 pt-2">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button group relative px-4 py-2 rounded-full border-2 transition-all duration-300 hover:bg-cyan-400 hover:text-[#090c10] hover:border-cyan-400 border-cyan-400 text-cyan-400 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-400/30"
                          title="Live Demo"
                        >
                          <Link size={16} className="transition-transform duration-300 group-hover:scale-110" />
                          <span className="text-xs font-medium">Live</span>
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-button group relative px-4 py-2 rounded-full border-2 transition-all duration-300 hover:bg-[#38bdf8] hover:text-[#090c10] hover:border-[#38bdf8] border-[#38bdf8] text-[#38bdf8] flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-400/30"
                          title="GitHub Repo"
                        >
                          <Github size={16} className="transition-transform duration-300 group-hover:scale-110" />
                          <span className="text-xs font-medium">Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Desktop Layout (Original) */
          <div className="flex flex-col lg:flex-row gap-12">
            <div
              ref={containerRef}
              className="lg:w-3/4 snap-y snap-mandatory overflow-y-auto soft-bg"
              style={{
                height: "60vh",
                borderRadius: "1rem",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <style>
                {`
                  .soft-bg::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>
              {projects.map((project, index) => (
                <div
                  key={index}
                  ref={(el) => (projectRefs.current[index] = el)}
                  className="relative backdrop-blur-md rounded-lg p-6 min-h-[60vh] h-[60vh] flex flex-col md:flex-row md:items-center items-center snap-center transition-all duration-300 ease-in-out w-full project-card-glow minimal-hover"
                  style={{
                    marginBottom: index !== projects.length - 1 ? "0px" : undefined,
                    border: "none",
                    outline: "none",
                  }}
                >
                  <span className="project-glow-corner" />
                  <span className="project-accent-corner" />
                  
                  <div
                    ref={(el) => (imageRefs.current[index] = el)}
                    className="w-full md:w-3/4 h-64 md:h-80 rounded-lg mb-6 flex items-center justify-center overflow-hidden self-center mx-10 cursor-pointer"
                    style={{ backgroundColor: "#10141a", border: "1px solid #1e293b" }}
                    onClick={() => openModal(project.previewImage, project.live)}
                  >
                    <img
                      src={project.previewImage}
                      alt={`Preview of ${project.title}`}
                      className="w-full h-full object-cover rounded-lg"
                      style={{ filter: "brightness(0.8)" }}
                    />
                  </div>
                  
                  <div className="w-full md:w-1/2 max-w-2xl mx-auto flex flex-col justify-center">
                    <h3
                      className="text-2xl lg:text-3xl font-semibold mb-3 text-left"
                      style={{
                        color: "#fff",
                        fontFamily:
                          "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-base text-justify mb-2 break-words"
                      style={{
                        color: "#d1d5db",
                        fontFamily:
                          "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
                      }}
                    >
                      {project.description}
                    </p>
                    
                    <div className="flex justify-start items-center mt-4 gap-2">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full border transition-all duration-300 hover:bg-cyan-400 hover:text-[#090c10] hover:border-cyan-400 border-cyan-400 text-cyan-400 flex items-center justify-center"
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

            {/* Right: Tech Stack (Fixed) - Desktop only */}
            <div className="lg:w-1/4">
              <div className="sticky top-16">
                <h3
                  className="text-2xl font-semibold mb-6"
                  style={{
                    color: "#fff",
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
                          isActive ? "bg-cyan-400 text-black border-cyan-400" : "bg-[#10141a] text-gray-300 border-gray-700"
                        }`}
                        style={{
                          backgroundColor: isActive ? "#22d3ee" : "#10141a",
                          color: isActive ? "#000" : "#d1d5db",
                          border: isActive ? "1px solid #22d3ee" : "1px solid #1e293b",
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
        )}
      </div>
    </section>
  );
};

export default Projects;