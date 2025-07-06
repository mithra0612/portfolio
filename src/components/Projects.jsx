"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link, Github, ChevronLeft, ChevronRight } from "lucide-react";

// Projects data (only 4 projects as mentioned)
const projects = [
  {
    title: "AI-Based Financial Services Platform for India Post",
    description: "An AI-driven platform that leverages demographic and economic cycle analysis to deliver personalized financial service recommendations for India Post services and schemes, promoting financial inclusion across diverse populations in India.",
    tech: ["React.js", "HTML5", "CSS3", "JavaScript", "Selenium WebDriver", "BeautifulSoup4", "Python", "Pandas", "NumPy"],
    live: "",
    github: "https://github.com/mithra0612/postal-service",
    thumbnail: "/financial-services-preview.png",
    year: "2024",
    event: "Smart India Hackathon, Finalist"
  },
  {
    title: "Wellcare: AI-Based Women's Health and Wellness Platform",
    description: "A comprehensive digital platform focused on women's health and wellness education, offering features like period and ovulation tracking, a symptoms tracker, an AI-powered diet recommendation system, gamified myth-busting, and an interactive chatbot for health-related queries.",
    tech: ["React.js", "Node.js", "Express.js", "Firestore", "Google Cloud Platform", "TensorFlow", "JavaScript", "HTML5", "CSS3", "Redux"],
    live: "https://women-app.vercel.app/",
    github: "https://github.com/mithra0612/women-app",
    thumbnail: "/wellcare.png",
    year: "2025",
    event: "TNWISE Hackathon 2025,Finalist"
  },
  {
    title: "Growth Guardian – AI-Driven Financial Literacy Platform",
    description: "A robust platform aimed at enhancing financial literacy and preventing scams, equipped with educational modules, an investment simulator, a machine learning-powered asset return forecasting model, a budget planner, and a scam prevention chatbot for real-time user support.",
    tech: ["React.js", "Node.js", "Express.js", "TensorFlow", "Scikit-learn", "JavaScript", "HTML5", "CSS3", "MongoDB"],
    live: "https://growth-guardian.vercel.app/",
    github: "https://github.com/mithra0612/growth-guardian",
    thumbnail: "/growth-guardian.png",
    year: "2025",
    event: "HackIt Winner"
  },
  {
    title: "Second-Hand Car Buying and Selling Platform",
    description: "A streamlined, user-friendly platform designed to simplify the process of buying and selling second-hand cars, featuring intuitive browsing, comparison tools, and a responsive interface for enhanced user experience.",
    tech: ["React.js", "Node.js", "HTML5", "CSS3", "JavaScript", "Axios", "Express.js"],
    live: "",
    github: "https://github.com/mithra0612/CAR_MARKET",
    thumbnail: "/car-market.png",
    year: "2024",
    event: "Personal Project"
  }
];

export const HeroParallaxProjects = () => {
  const ref = React.useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.2], [20, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [-200, 0]);

  // Check if device is mobile
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Desktop scroll handling
  React.useEffect(() => {
    if (isMobile) return;
    
    const handleWheel = (e) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect || rect.top > 100 || rect.bottom < 100) return;

      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();
        
        if (e.deltaX > 0 || (e.shiftKey && e.deltaY > 0)) {
          setCurrentIndex(prev => Math.min(prev + 1, projects.length - 1));
        } else if (e.deltaX < 0 || (e.shiftKey && e.deltaY < 0)) {
          setCurrentIndex(prev => Math.max(prev - 1, 0));
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [isMobile]);

  // Desktop keyboard navigation
  React.useEffect(() => {
    if (isMobile) return;
    
    const handleKeyDown = (e) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect || rect.top > 100 || rect.bottom < 100) return;
      
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentIndex(prev => Math.min(prev + 1, projects.length - 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobile]);

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentIndex(prev => Math.min(prev + 1, projects.length - 1));
    }
    if (isRightSwipe) {
      setCurrentIndex(prev => Math.max(prev - 1, 0));
    }
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, projects.length - 1));
  };

  return (
    <div
      ref={ref}
      className={`${isMobile ? 'min-h-screen' : 'h-[150vh]'} py-5 md:py-10 overflow-hidden antialiased relative flex flex-col self-auto ${isMobile ? '' : '[perspective:1000px] [transform-style:preserve-3d]'} bg-black`}
    >
      <Header isMobile={isMobile} />

      <motion.div
        style={isMobile ? {} : {
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="mt-5 md:mt-10 flex-1"
      >
        {/* Mobile View */}
        {isMobile ? (
          <div className="relative px-4">
            {/* Mobile Navigation Buttons */}
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentIndex === 0 
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-blue-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                disabled={currentIndex === projects.length - 1}
                className={`p-2 rounded-full transition-all duration-300 ${
                  currentIndex === projects.length - 1 
                    ? 'bg-gray-800 text-gray-600 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Mobile Project Cards */}
            <div 
              className="relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={project.title} className="w-full flex-shrink-0">
                    <MobileProjectCard 
                      project={project} 
                      isActive={index === currentIndex}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Swipe Instruction */}
            <div className="text-center mt-4 text-gray-400 text-sm">
              Swipe left or right to browse projects
            </div>
          </div>
        ) : (
          /* Desktop View */
          <div 
            className={`flex space-x-[50px] mb-10 px-10 ${isHovered ? 'transition-transform duration-[8000ms] ease-out' : 'transition-transform duration-[1800ms] ease-out'}`}
            style={{
              transform: `translateX(-${currentIndex * 750}px)`,
              width: `${projects.length * 750}px`,
            }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                project={project}
                translate={translateX}
                key={project.title}
                isActive={index === currentIndex}
                onHover={setIsHovered}
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export const Header = ({ isMobile }) => {
  return (
    <div className="max-w-7xl relative mx-auto py-5 md:py-10 lg:py-20 px-4 w-full left-0 top-0">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-xl sm:text-2xl md:text-4xl lg:text-7xl font-bold text-orange-400 leading-tight"
      >
        My Projects <br />
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl text-sm md:text-base lg:text-xl mt-4 md:mt-8 text-gray-300 leading-relaxed"
      >
        A collection of innovative projects showcasing AI-driven solutions, 
        modern web applications, and cutting-edge technologies. Each project 
        demonstrates my passion for creating impactful digital experiences.
      </motion.p>
    </div>
  );
};

export const MobileProjectCard = ({ project, isActive }) => {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div className="px-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black border border-blue-900 rounded-2xl overflow-hidden shadow-lg"
      >
        {/* Mobile Project Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23374151'/%3E%3C/svg%3E";
            }}
          />
          
          {/* Mobile Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Mobile Action Buttons */}
          <div className="absolute top-3 right-3 flex space-x-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600/80 text-white rounded-full hover:bg-blue-700 transition-all duration-300 backdrop-blur-sm"
                title="Live Demo"
              >
                <Link size={16} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600/80 text-white rounded-full hover:bg-blue-700 transition-all duration-300 backdrop-blur-sm"
                title="Source Code"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Mobile Project Content */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="text-white font-bold text-lg leading-tight">
            {project.title}
          </h3>

          {/* Year and Event */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-blue-600 px-3 py-1 rounded-full text-white text-xs font-medium">
              {project.year}
            </span>
            <span className="text-blue-300 text-xs font-medium">
              {project.event}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Toggle Details Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-200"
          >
            {showDetails ? 'Hide Technologies' : 'Show Technologies'}
          </button>

          {/* Tech Stack - Collapsible */}
          <motion.div
            initial={false}
            animate={{ height: showDetails ? 'auto' : 0, opacity: showDetails ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2 border-t border-gray-800">
              <h4 className="text-blue-300 text-xs font-bold mb-2 uppercase tracking-wide">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium text-blue-200 bg-blue-600/15 rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectCard = ({
  project,
  translate,
  isActive,
  onHover,
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className={`group/product h-[450px] w-[700px] relative flex-shrink-0 transition-all duration-300 ease-in-out ${
        isActive ? 'z-10' : 'z-0'
      }`}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <div className={`block group-hover/product:shadow-2xl transition-all duration-300 relative h-full w-full rounded-2xl overflow-hidden bg-black backdrop-blur-sm border ${
        isActive 
          ? 'border-blue-500 shadow-lg shadow-blue-500/20' 
          : 'border-blue-900 group-hover/product:shadow-blue-500/30'
      }`}>
        {/* Project Image with Hover Overlay */}
        <div className="relative h-[370px] w-full overflow-hidden group/image">
          <img
            src={project.thumbnail}
            height="370"
            width="700"
            className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-300 group-hover/product:scale-105"
            alt={project.title}
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg width='700' height='370' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23374151'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='18' fill='%23ffffff' text-anchor='middle' dy='.3em'%3E%3C/text%3E%3C/svg%3E";
            }}
          />
          
          {/* Enhanced Image Hover Overlay */}
          <div className="absolute inset-0 bg-black/90 opacity-0 group-hover/image:opacity-100 transition-all duration-300 flex flex-col justify-start p-6 backdrop-blur-sm overflow-y-auto">
            {/* Title with improved typography */}
            <h3 className="text-white font-bold text-xl mb-4 leading-tight tracking-wide">
              {project.title}
            </h3>
            
            {/* Year and Event badges with links */}
            <div className="flex items-center gap-3 mb-5">
              <span className="bg-blue-600 px-3 py-1.5 rounded-full text-white text-sm font-medium">
                {project.year}
              </span>
              <span className="text-blue-300 text-sm font-medium">
                {project.event}
              </span>
              <div className="flex items-center gap-2 ml-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-blue-600/20 text-blue-300 hover:bg-blue-600/40 hover:text-white transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                    title="Live Demo"
                  >
                    <Link size={14} />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full bg-blue-600/20 text-blue-300 hover:bg-blue-600/40 hover:text-white transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                    title="Source Code"
                  >
                    <Github size={14} />
                  </a>
                )}
              </div>
            </div>
            
            {/* Description with improved readability */}
            <p className="text-gray-200 text-base leading-relaxed mb-6 font-normal">
              {project.description}
            </p>

            {/* Tech Stack with enhanced styling */}
            <div className="mb-6">
              <h4 className="text-blue-300 text-sm font-bold mb-3 uppercase tracking-wide">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs font-medium text-blue-200 bg-blue-600/15 rounded-full border border-blue-500/30 hover:bg-blue-600/25 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-4 relative z-10 h-[80px] flex items-center">
          <h2 className="text-base font-bold text-white line-clamp-2 group-hover/product:text-blue-300 transition-colors duration-300">
            {project.title}
          </h2>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default HeroParallaxProjects;