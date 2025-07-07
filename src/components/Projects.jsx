import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Link, Github } from "lucide-react";

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
    ],
    live: "",
    github: "https://github.com/mithra0612/postal-service",
    thumbnail: "/financial-services-preview.png",
    year: "2024",
    event: "Smart India Hackathon, Finalist",
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
      "TensorFlow",
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
      "TensorFlow",
      "Scikit-learn",
      "JavaScript",
      "HTML5",
      "CSS3",
      "MongoDB",
    ],
    live: "https://growth-guardian.vercel.app/",
    github: "https://github.com/mithra0612/growth-guardian",
    thumbnail: "/growth-guardian.png",
    year: "2025",
    event: "HackIt Winner",
  },
  {
    title: "Second-Hand Car Buying and Selling Platform",
    description:
      "A streamlined, user-friendly platform designed to simplify the process of buying and selling second-hand cars, featuring intuitive browsing, comparison tools, and a responsive interface for enhanced user experience.",
    tech: [
      "React.js",
      "Node.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Axios",
      "Express.js",
    ],
    live: "",
    github: "https://github.com/mithra0612/CAR_MARKET",
    thumbnail: "/car-market.png",
    year: "2024",
    event: "Personal Project",
  },
];

const HorizontalScrollProjects = () => {
  const containerRef = useRef(null);
  const [currentProject, setCurrentProject] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smoother spring with better damping
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001
  });

  // Better project progress calculation
  const projectProgress = useTransform(
    smoothProgress,
    [0, 1],
    [0, projects.length - 1]
  );

  // Update current project with proper thresholds
  useEffect(() => {
    const unsubscribe = projectProgress.onChange((latest) => {
      // Use a threshold of 0.5 to determine when to switch projects
      const index = Math.round(latest);
      const clampedIndex = Math.max(0, Math.min(index, projects.length - 1));
      
      if (clampedIndex !== currentProject) {
        setCurrentProject(clampedIndex);
      }
    });

    return unsubscribe;
  }, [projectProgress, currentProject]);

  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 pb-0">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-bold text-blue-400"
        >
          My Projects
        </motion.h1>
      </div>

      {/* Scroll Container - Adjusted height for better scroll sensitivity */}
      <div
        ref={containerRef}
        className="relative"
        style={{
          height: `${projects.length * 100}vh`,
          scrollBehavior: 'smooth'
        }}
      >
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Progress Indicator - REMOVED */}
          
          <div className="w-full max-w-7xl mx-auto px-4">
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
  
  // Transform the smooth progress to get the actual project index
  const adjustedProgress = useTransform(
    projectProgress,
    [0, 1],
    [0, projects.length - 1]
  );
  
  // Improved positioning with better spacing to prevent overlap
  const cardX = useTransform(
    adjustedProgress,
    [index - 1.5, index - 1, index - 0.5, index, index + 0.5, index + 1, index + 1.5],
    ["150%", "100%", "50%", "0%", "-50%", "-100%", "-150%"]
  );
  
  // Better opacity curve for smoother transitions
  const cardOpacity = useTransform(
    adjustedProgress,
    [index - 1.2, index - 0.8, index - 0.3, index, index + 0.3, index + 0.8, index + 1.2],
    [0, 0.2, 0.6, 1, 0.6, 0.2, 0]
  );
  
  // Refined scale transitions
  const cardScale = useTransform(
    adjustedProgress,
    [index - 1, index - 0.5, index, index + 0.5, index + 1],
    [0.85, 0.92, 1, 0.92, 0.85]
  );

  // Improved blur effect
  const cardBlur = useTransform(
    adjustedProgress,
    [index - 0.8, index - 0.3, index, index + 0.3, index + 0.8],
    [4, 1, 0, 1, 4]
  );

  // Add z-index based on proximity to current project
  const zIndex = useTransform(
    adjustedProgress,
    [index - 1, index, index + 1],
    [1, 10, 1]
  );

  return (
    <motion.div
      style={{
        x: cardX,
        opacity: cardOpacity,
        scale: cardScale,
        filter: `blur(${cardBlur}px)`,
        zIndex: isActive ? 10 : 1,
      }}
      className="absolute top-1/2 left-1/2 w-full max-w-7xl transform -translate-x-1/2 -translate-y-1/2"
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8
      }}
    >
      <div className="w-full bg-gray-900/90 backdrop-blur-sm border border-orange-400/20 rounded-2xl overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2 gap-0 h-full">
          {/* Image Section */}
          <div className="relative h-80 md:h-96 lg:h-[450px] overflow-hidden bg-gray-800">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-orange-400/20 backdrop-blur-sm text-orange-400 rounded-full hover:bg-orange-400/30 transition-all duration-300"
                  title="Live Demo"
                >
                  <Link size={18} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-orange-400/20 backdrop-blur-sm text-orange-400 rounded-full hover:bg-orange-400/30 transition-all duration-300"
                  title="Source Code"
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 flex flex-col justify-center space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                  {project.year}
                </span>
                <span className="text-orange-300 text-sm font-medium">
                  {project.event}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2 leading-tight">
                {project.title}
              </h3>

              <p className="text-gray-300 text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-orange-300 text-sm font-bold mb-3 uppercase tracking-wide">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 6).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs font-medium text-orange-200 bg-orange-400/10 rounded-full border border-orange-400/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 6 && (
                  <span className="px-3 py-1 text-xs font-medium text-orange-200 bg-orange-400/10 rounded-full border border-orange-400/20">
                    +{project.tech.length - 6} more
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HorizontalScrollProjects;
