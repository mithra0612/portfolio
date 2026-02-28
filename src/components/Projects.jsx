import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link, Github, ArrowLeft, ArrowRight } from "lucide-react";

// Projects data
const projects = [
  {
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
      "LightGBM",
    ],
    live: "",
    github: "https://github.com/mithra0612/postal-service",
    thumbnail: "/financial-services.png",
    year: "2024",
    event: "Smart India Hackathon, Finalist",
  },
  {
    title: "FRA Atlas & WebGIS DSS",
    description:
      "An AI-powered platform for end-to-end Forest Rights Act (FRA) implementation: digitizing legacy claims via OCR+NER, generating geofenced shapefiles, and delivering a centralized, real-time WebGIS Atlas with a Decision Support System that maps government schemes to eligible tribal households and communities.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL + PostGIS",
      "GeoJSON",
      "QGIS",
      "Google Earth Engine",
      "Tesseract OCR",
      "spaCy NER",
      "PyTorch",
      "scikit-learn",
      "TensorFlow Lite",
      "LangChain",
      "RAG (Retrieval-Augmented Generation)",
      "OpenCV",
      "WebGL",
      "Map APIs",
    ],
    live: "https://dev-proto-1.vercel.app/",
    github: "https://github.com/mithra0612/vanAdhikar",
    thumbnail: "/fra.png",
    year: "2025",
    event: "Smart India Hackathon 2025",
  },

  {
    title: "PitVision — Open-Cast Mining Monitor",
    description:
      "A geospatial tool that detects open-cast mining from EO/SAR imagery, flags activity beyond lease boundaries, and computes depth and volume from DEMs using Simpson’s method, with interactive maps and automated compliance reports.",
    tech: [
      "React",
      "Node.js",
      "PostGIS",
      "Python",
      "Rasterio",
      "PyTorch",
      "MapLibre GL",
      "Sentinel Hub API",
      "STAC API",
      "LangChain",
    ],
    live: "https://sih-prototype-07.vercel.app/",
    github: "https://github.com/your-org/mineguard",
    thumbnail: "/open.png",
    year: "2025",
    event: "Smart India Hackathon 2025",
  },
  {
    title: "Wellcare: AI-Based Women's Health and Wellness Platform",
    description:
      "A comprehensive digital platform focused on women's health and wellness education, offering features like period and ovulation tracking, a symptoms tracker, an AI-powered diet recommendation system, gamified myth-busting, and an interactive chatbot for health-related queries.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Firestore",
      "Google Cloud Platform",
      "Hugging Face Transformers",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Redux",
    ],
    live: "https://women-app.vercel.app/",
    github: "https://github.com/mithra0612/women-app",
    thumbnail: "/wellcare.png",
    year: "2025",
    event: "TNWISE Hackathon 2025, Finalist",
  },
  {
    title: "Growth Guardian – AI-Driven Financial Literacy Platform",
    description:
      "A robust platform aimed at enhancing financial literacy and preventing scams, equipped with educational modules, an investment simulator, a machine learning-powered asset return forecasting model, a budget planner, and a scam prevention chatbot for real-time user support.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Hugging Face Model",
      "Scikit-learn",
      "JavaScript",
      "HTML5",
      "CSS3",
      "MongoDB",
      "LangChain",
    ],
    live: "https://growth-guardian.vercel.app/",
    github: "https://github.com/mithra0612/growth-guardian",
    thumbnail: "/growth-guardian.png",
    year: "2025",
    event: "HackIt Winner",
  },
  {
    title: "Civic Lens – Transparent Governance",
    description:
      "A data-driven governance platform designed to make Kerala’s open data accessible and actionable through interactive dashboards at the State, District, and Village levels. It enables personalized welfare scheme mapping, geo-tagged issue reporting (in Malayalam & English), and real-time public engagement.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "Open Data APIs",
      "LangChain",
      "RAG (Retrieval-Augmented Generation)",
      "Machine Learning",
    ],
    live: "https://civic-lens-app.vercel.app/",
    github: "https://github.com/adhavan13/Hack25-Frontend",
    thumbnail: "/civic-lens.png",
    year: "2025",
    event: "Hack'25 Finalist",
  },
];

const HorizontalScrollProjects = () => {
  const containerRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  const projectProgress = useTransform(
    smoothProgress,
    [0, 1],
    [0, projects.length - 1]
  );

  useEffect(() => {
    const unsubscribe = projectProgress.onChange((latest) => {
      const index = Math.round(latest);
      const clampedIndex = Math.max(0, Math.min(index, projects.length - 1));
      if (clampedIndex !== currentProject) {
        setCurrentProject(clampedIndex);
      }
    });
    return unsubscribe;
  }, [projectProgress, currentProject]);

  // compute slightly reduced container height to avoid excess blank at the bottom
  const containerHeight = Math.max(projects.length * 100 - 50, 100);

  // Smooth scroll to project index
  const scrollToIndex = useCallback((index) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const target = containerTop + index * window.innerHeight;
    window.scrollTo({ top: target, behavior: "smooth" });
  }, []);

  // keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") {
        const next = Math.min(projects.length - 1, currentProject + 1);
        scrollToIndex(next);
      } else if (e.key === "ArrowLeft") {
        const prev = Math.max(0, currentProject - 1);
        scrollToIndex(prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentProject, scrollToIndex]);

  return (
    <div className="relative bg-black text-white">
      {/* Animated background */}
      <style>{`
        @keyframes floatGradient {
          0% { transform: translate(-40%, -30%) rotate(0deg) scale(1); opacity: .7; }
          50% { transform: translate(-20%, -10%) rotate(10deg) scale(1.05); opacity: .85; }
          100% { transform: translate(-40%, -30%) rotate(0deg) scale(1); opacity: .7; }
        }
      `}</style>

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          aria-hidden
          className="absolute -left-40 -top-40 w-[900px] h-[900px] rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(59,130,246,0.22), rgba(0,0,0,0)) , radial-gradient(circle at 70% 70%, rgba(249,115,22,0.12), rgba(0,0,0,0))",
            animation: "floatGradient 10s ease-in-out infinite",
          }}
        />
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 pb-4 -mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-5xl md:text-5xl font-extrabold text-blue-500 tracking-tight mt-20"
        >
          My Projects
        </motion.h1>
        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-gray-300 max-w-2xl"
        >
          Selected work — click a card or use arrows / dots to navigate.
        </motion.p> */}
      </div>

      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="relative"
        style={{
          height: `${containerHeight}vh`,
          scrollBehavior: "smooth",
        }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-4">
            {/* Top-left counter */}
            <div className="absolute left-4 top-6 z-20">
              {/* <div className="text-sm text-gray-400">
                <span className="font-semibold text-white mr-2">
                  {String(currentProject + 1).padStart(2, "0")}
                </span>
                <span className="opacity-70">/ {String(projects.length).padStart(2, "0")}</span>
              </div> */}
            </div>

            {/* Right-side dots */}
            <div className="hidden md:absolute md:right-6 md:top-1/2 md:z-20 md:transform md:-translate-y-1/2 md:flex md:flex-col md:items-center md:gap-3">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === currentProject
                      ? "bg-tan scale-125 shadow-[0_0_0_6px_rgba(198,172,143,0.08)]"
                      : "bg-stone-brown hover:bg-tan/70"
                  }`}
                />
              ))}
            </div>

            {/* Mobile bottom dots (touch-friendly) */}
            <div className="md:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
              {projects.map((p, i) => (
                <button
                  key={`mobile-${p.title}`}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    i === currentProject
                      ? "bg-tan scale-125 shadow-[0_0_0_8px_rgba(198,172,143,0.08)]"
                      : "bg-stone-brown hover:bg-tan/70"
                  }`}
                />
              ))}
            </div>

            {/* Arrow navigation */}
            {/* <div className="absolute left-6 top-1/2 z-20 transform -translate-y-1/2 flex flex-col gap-3">
              <button
                onClick={() => scrollToIndex(Math.max(0, currentProject - 1))}
                aria-label="Previous"
                className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition"
              >
                <ArrowLeft size={16} color="rgba(249,115,22,0.95)" />
              </button>
              <button
                onClick={() => scrollToIndex(Math.min(projects.length - 1, currentProject + 1))}
                aria-label="Next"
                className="p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition"
              >
                <ArrowRight size={16} color="rgba(59,130,246,0.95)" />
              </button>
            </div> */}

            {/* Project Cards Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  currentProject={currentProject}
                  projectProgress={smoothProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, currentProject, projectProgress }) => {
  const isActive = index === currentProject;

  const adjustedProgress = useTransform(
    projectProgress,
    [0, 1],
    [0, projects.length - 1]
  );

  const cardX = useTransform(
    adjustedProgress,
    [
      index - 1.5,
      index - 1,
      index - 0.5,
      index,
      index + 0.5,
      index + 1,
      index + 1.5,
    ],
    ["150%", "100%", "50%", "0%", "-50%", "-100%", "-150%"]
  );

  const cardOpacity = useTransform(
    adjustedProgress,
    [
      index - 1.2,
      index - 0.8,
      index - 0.3,
      index,
      index + 0.3,
      index + 0.8,
      index + 1.2,
    ],
    [0, 0.2, 0.6, 1, 0.6, 0.2, 0]
  );

  const cardScale = useTransform(
    adjustedProgress,
    [index - 1, index - 0.5, index, index + 0.5, index + 1],
    [0.88, 0.95, 1, 0.95, 0.88]
  );

  const cardBlur = useTransform(
    adjustedProgress,
    [index - 0.8, index - 0.3, index, index + 0.3, index + 0.8],
    [6, 2, 0, 2, 6]
  );

  // mobile "read more" toggle (local to each card)
  const [expanded, setExpanded] = useState(false);

  const handleImageClick = () => {
    if (project.live) {
      window.open(project.live, "_blank", "noopener,noreferrer");
    } else if (project.github) {
      window.open(project.github, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      style={{
        x: cardX,
        opacity: cardOpacity,
        scale: cardScale,
        filter: `blur(${cardBlur}px)`,
        zIndex: isActive ? 20 : 1,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 28,
        mass: 0.7,
      }}
      className="absolute top-1/2 left-1/2 w-full max-w-7xl transform -translate-x-1/2 -translate-y-1/2 px-4"
    >
      {/* MOBILE LAYOUT (completely redesigned for small screens) */}
      <div
        className={`md:hidden w-full bg-gradient-to-b from-jet-black/90 to-black/90 border rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 ${
          isActive ? "ring-1 ring-tan/20" : "opacity-95"
        }`}
      >
        <div className="flex flex-col">
          <button
            onClick={handleImageClick}
            className="block w-full h-48 overflow-hidden bg-jet-black"
            title={project.live ? "Open live demo" : "Open source"}
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center bg-gray-800">
                    <div class="text-center text-gray-400">
                      <div class="text-3xl mb-1">📷</div>
                      <div class="text-xs">Project Image</div>
                    </div>
                  </div>
                `;
              }}
            />
          </button>

          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  {project.year}
                </span>
                <span className="text-blue-400 text-xs font-medium">
                  {project.event}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-tan/10 text-tan rounded-md text-sm font-medium"
                    title="Live Demo"
                  >
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-jet-black/60 text-tan rounded-md text-sm font-medium"
                    title="Source Code"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-soft-linen leading-tight">
              {project.title}
            </h3>

            <p className="text-soft-linen/80 text-sm leading-relaxed">
              {expanded
                ? project.description
                : `${project.description.slice(0, 140)}${
                    project.description.length > 140 ? "…" : ""
                  }`}
            </p>
            {project.description.length > 140 && (
              <button
                onClick={() => setExpanded((s) => !s)}
                className="text-xs text-tan font-semibold"
                aria-expanded={expanded}
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}

            <div className="pt-1">
              {/* <h4 className="text-xs text-tan font-bold uppercase tracking-wide mb-2">
                Tech
              </h4> */}
              <div className="flex gap-2 overflow-x-auto pb-1 -mx-1">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="flex-shrink-0 px-3 py-1.5 text-xs font-medium text-soft-linen bg-tan/8 rounded-full border border-tan/12"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DESKTOP / TABLET LAYOUT (unchanged) */}
      <div
        className={`hidden md:block w-full bg-gradient-to-r from-jet-black/80 to-black/80 border rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 ${
          isActive ? "scale-100 ring-1 ring-tan/20" : "opacity-90"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Image Section */}
          <div
            className="relative h-56 sm:h-72 md:h-96 lg:h-[480px] overflow-hidden bg-gradient-to-br from-jet-black via-jet-black to-black cursor-pointer"
            onClick={handleImageClick}
            title={
              project.live
                ? "Click to view live demo"
                : "Click to view source code"
            }
          >
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `
                  <div class="w-full h-full flex items-center justify-center bg-gray-800">
                    <div class="text-center text-gray-400">
                      <div class="text-4xl mb-2">📷</div>
                      <div class="text-sm">Project Image</div>
                    </div>
                  </div>
                `;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-8 flex flex-col justify-center space-y-5">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {project.year}
                </span>
                <span className="text-blue-400 text-sm font-medium">
                  {project.event}
                </span>
              </div>

              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-soft-linen leading-tight flex-1 mr-4">
                  {project.title}
                </h3>

                <div className="flex space-x-2 flex-shrink-0">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-tan/20 backdrop-blur-sm text-tan rounded-full hover:bg-tan/30 transition-all duration-300"
                      title="Live Demo"
                    >
                      <Link size={18} className = 'text-green-500'/>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-tan/20 backdrop-blur-sm text-tan rounded-full hover:bg-tan/30 transition-all duration-300"
                      title="Source Code"
                    >
                      <Github size={18} className = 'text-green-500'/>
                    </a>
                  )}
                </div>
              </div>

              <p className="text-soft-linen/80 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-tan text-sm font-bold mb-3 uppercase tracking-wide text-orange-500">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 sm:gap-2 overflow-x-auto sm:overflow-visible pb-1 text-orange-500">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium text-soft-linen bg-tan/10 rounded-full border border-tan/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HorizontalScrollProjects;
