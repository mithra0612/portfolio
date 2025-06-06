"use client"; 
import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Eye, Code, Zap, Sparkles } from 'lucide-react';

const ProjectsSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Luxe E-Commerce Platform",
      description: "Premium shopping experience with AI-powered recommendations, advanced product visualization, and seamless checkout flow. Built with performance and accessibility as core priorities for modern consumers.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      status: "live",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      category: "E-Commerce"
    },
    {
      id: 2,
      title: "Analytics Dashboard Pro",
      description: "Real-time data visualization platform with interactive charts, custom reporting, and team collaboration features. Designed for modern businesses to make data-driven decisions with confidence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      status: "live",
      tech: ["Vue.js", "D3.js", "Node.js", "MongoDB", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Dashboard"
    },
    {
      id: 3,
      title: "Fitness Companion App",
      description: "Cross-platform mobile application with comprehensive workout tracking, nutrition planning, and social motivation features. Empowers users to achieve their fitness goals through intelligent insights.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
      status: "development",
      tech: ["React Native", "Expo", "Firebase", "Redux Toolkit", "Styled Components"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mobile App"
    },
    {
      id: 4,
      title: "Creative Portfolio Hub",
      description: "Dynamic portfolio platform for creative professionals with interactive galleries, client collaboration tools, and seamless content management. Showcases work beautifully while streamlining client workflows.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop&crop=center",
      status: "live",
      tech: ["Svelte", "SvelteKit", "Sanity CMS", "GSAP", "Three.js"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Portfolio"
    },
    {
      id: 5,
      title: "Project Management Suite",
      description: "Comprehensive SaaS solution for team collaboration, task management, and project tracking with intuitive workflows. Scales from small teams to enterprise organizations with powerful automation.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      status: "live",
      tech: ["Angular", "NestJS", "PostgreSQL", "Docker", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      category: "SaaS"
    },
    {
      id: 6,
      title: "DeFi Trading Platform",
      description: "Next-generation cryptocurrency trading interface with advanced charting, portfolio management, and DeFi protocol integration. Provides institutional-grade tools for retail investors.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center",
      status: "concept",
      tech: ["React", "Web3.js", "Solidity", "Ethers.js", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Crypto"
    }
  ];

  const statusConfig = {
    live: { 
      label: "Live", 
      className: "bg-teal-500/20 text-teal-300 border border-teal-500/30", 
      icon: Zap 
    },
    development: { 
      label: "In Development", 
      className: "bg-orange-500/20 text-orange-300 border border-orange-500/30", 
      icon: Code 
    },
    concept: { 
      label: "Concept", 
      className: "bg-purple-500/20 text-purple-300 border border-purple-500/30", 
      icon: Sparkles 
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, entry.target.dataset.id]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const ProjectCard = ({ project, index }) => {
    const StatusIcon = statusConfig[project.status].icon;
    const isVisible = visibleCards.has(project.id.toString());

    return (
      <div
        data-id={project.id}
        className={`project-card w-full max-w-6xl mx-auto transition-all duration-700 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ 
          transitionDelay: `${index * 200}ms`,
          minHeight: '500px'
        }}
      >
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600/70 hover:bg-slate-800/40 transition-all duration-500 group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Left Side - Preview Image */}
            <div className="space-y-4">
              <div className="relative rounded-xl overflow-hidden group/image">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                
                {/* Image overlay */}
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-lg text-slate-200">
                    <Eye size={16} />
                    <span className="text-sm font-medium">Preview</span>
                  </div>
                </div>
                
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm ${statusConfig[project.status].className}`}>
                    <StatusIcon size={14} />
                    <span className="text-xs font-semibold">{statusConfig[project.status].label}</span>
                  </div>
                </div>
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1.5 bg-slate-900/70 backdrop-blur-sm border border-slate-600/30 rounded-full">
                    <span className="text-xs font-medium text-slate-300">{project.category}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700/50 hover:bg-slate-600/60 border border-slate-600/50 hover:border-slate-500/70 text-slate-200 hover:text-white rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  <Github size={18} />
                  Code
                </a>
              </div>
            </div>

            {/* Right Side - Project Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-slate-100 mb-4 group-hover:text-teal-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-slate-200 font-semibold text-sm uppercase tracking-wider mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-slate-700/60 border border-slate-600/40 rounded-full text-sm font-medium text-slate-200 hover:bg-slate-600/60 hover:border-slate-500/60 hover:text-slate-100 transition-all duration-200 hover:scale-105 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Additional Project Details */}
              <div className="pt-4 border-t border-slate-700/50">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-400 font-medium">Status:</span>
                    <span className="ml-2 text-slate-200">{statusConfig[project.status].label}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Category:</span>
                    <span className="ml-2 text-slate-200">{project.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500/10 border border-teal-500/20 rounded-full mb-8">
            <Sparkles size={18} className="text-teal-400" />
            <span className="text-teal-300 font-semibold">Featured Work</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-100 via-teal-200 to-slate-100 bg-clip-text text-transparent mb-8">
            My Projects
          </h2>
          
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            A showcase of innovative digital experiences, from sleek e-commerce platforms 
            to cutting-edge mobile applications. Each project represents a unique challenge 
            and creative solution.
          </p>
        </div>

        {/* Projects List - Vertical Scrolling */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-16 border-t border-slate-700/50">
          <h3 className="text-2xl font-bold text-slate-200 mb-4">
            Interested in working together?
          </h3>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm always excited to take on new challenges and create amazing digital experiences. 
            Let's discuss your next project.
          </p>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25">
            <span>Get In Touch</span>
            <ExternalLink size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;