"use client";
import React, { useRef, useState, useEffect } from "react";
import { Link, Github } from "lucide-react";
import { gsap } from "gsap";

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
      title: "Wellcare: AI-Based Women’s Health and Wellness Platform",
      description:
        "A comprehensive digital platform focused on women’s health and wellness education, offering features like period and ovulation tracking, a symptoms tracker, an AI-powered diet recommendation system, gamified myth-busting, and an interactive chatbot for health-related queries.",
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
  const [activeProject, setActiveProject] = useState(0);
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ image: "", link: "" });

  // Intersection Observer to detect which project is currently visible
  useEffect(() => {
    if (!containerRef.current) return;

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
        // Only update if significantly visible
        setActiveProject(activeIndex);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: containerRef.current,
      threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
      rootMargin: "-10% 0px -10% 0px",
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
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [activeProject, projects.length]);

  // GSAP animations for image hover
  useEffect(() => {
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

        // Store the handlers for cleanup
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
  }, []);

  const openModal = (image, link) => {
    setModalContent({ image, link });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className=" lg:px-16 py-30 min-h-screen">
      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg overflow-hidden"
            style={{ maxWidth: "90%", maxHeight: "90%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalContent.image}
              alt="Project Preview"
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
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
          className="text-5xl font-bold text-white mb-8 px-6 lg:px-0 py-10"
          style={{
            display: "inline-block",
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
              borderRadius: "1rem",
              scrollbarWidth: "none", // Hide scrollbar for Firefox
              msOverflowStyle: "none", // Hide scrollbar for IE and Edge
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
                className="relative backdrop-blur-md rounded-lg p-6 min-h-[60vh] h-[60vh] flex flex-col md:flex-row md:items-center items-center snap-center transition-all duration-300 ease-in-out w-full project-card-glow minimal-hover"
                style={{
                  marginBottom: index !== projects.length - 1 ? "0px" : undefined,
                  border: "none",
                  outline: "none",
                }}
              >
                {/* Glow effect in bottom right corner */}
                <span className="project-glow-corner" />
                {/* Minimalistic top left accent */}
                <span className="project-accent-corner" />
                {/* Project Preview Image to the Left */}
                <div
                  ref={(el) => (imageRefs.current[index] = el)}
                  className="w-full md:w-3/4 h-64 md:h-80 rounded-lg mb-6 flex items-center justify-center overflow-hidden self-center mx-10 cursor-pointer"
                  style={{ backgroundColor: "#10141a", border: "1px solid #1e293b" }}
                  onClick={() => openModal(project.previewImage, project.live)}
                >
                  {/* Placeholder for project image/preview */}
                  <img
                    src={project.previewImage}
                    alt={`Preview of ${project.title}`}
                    className="w-full h-full object-cover rounded-lg"
                    style={{ filter: "brightness(0.8)" }}
                  />
                </div>
                {/* Project Details to the Right */}
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