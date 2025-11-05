"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const renderDescription = (description) => {
    if (Array.isArray(description)) {
      return (
        <ul className="text-secondary-text text-sm md:text-base leading-relaxed space-y-2" style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
          {description.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-green mr-2 mt-1 flex-shrink-0">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      );
    } else if (typeof description === 'string' && description.includes('•')) {
      const points = description.split('\n').filter(point => point.trim());
      return (
        <ul className="text-secondary-text text-sm md:text-base leading-relaxed space-y-2" style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary-green mr-2 mt-1 flex-shrink-0">•</span>
              <span>{point.replace('•', '').trim()}</span>
            </li>
          ))}
        </ul>
      );
    } else {
      return (
        <p className="text-secondary-text text-sm md:text-base leading-relaxed" style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
          {description}
        </p>
      );
    }
  };

  return (
    <div
      className="w-full bg-transparent font-sans px-4 sm:px-6 md:px-10 pr-6 sm:pr-8 md:pr-12"
      ref={containerRef}
      style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20 space-y-8 sm:space-y-12 md:space-y-16 pr-4 sm:pr-6 md:pr-8">
        {data.map((item, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col md:flex-row pt-6 sm:pt-8 md:pt-20 md:gap-16 pb-6 sm:pb-8 md:pb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Left side - Project description */}
            <div className="sticky flex flex-col z-40 top-20 md:top-40 self-start w-full md:max-w-xs lg:max-w-md md:w-full mb-6 md:mb-0 pr-6 sm:pr-8 md:pr-10">
              <div className="h-8 w-8 md:h-10 md:w-10 absolute left-2 md:left-3 rounded-full bg-primary-gray flex items-center justify-center">
                <div className="h-3 w-3 md:h-4 md:w-4 rounded-full bg-primary-green border border-primary-green/50 p-2" />
              </div>
              <div className="pl-12 sm:pl-16 md:pl-20">
                <motion.h3 
                  className="text-lg sm:text-xl md:text-3xl font-bold text-primary-white mb-2"
                  variants={textVariants}
                  style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                >
                  {item.projectTitle}
                </motion.h3>
                {item.subtitle && (
                  <motion.p 
                    className="text-primary-green text-xs sm:text-sm md:text-base font-medium mb-3 md:mb-4"
                    variants={textVariants}
                    style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                  >
                    {item.subtitle}
                  </motion.p>
                )}
                <motion.div variants={textVariants}>
                  {renderDescription(item.description)}
                </motion.div>
              </div>
            </div>

            {/* Right side - Image and Tech Stack */}
            <motion.div 
              className="relative w-full max-w-2xl ml-8 sm:ml-12 md:ml-0 pl-4 sm:pl-6 md:pl-0 pr-2 sm:pr-4 md:pr-6"
              variants={textVariants}
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-5 md:p-6 border border-gray-800 shadow-lg">
                {/* Project Image */}
                <div className="mb-4 md:mb-6">
                  {item.image}
                </div>
                
                {/* Tech Stack */}
                <div className="mb-4 md:mb-6">
                  <motion.h4 
                    className="text-primary-white text-base sm:text-lg font-semibold mb-3 md:mb-4"
                    variants={textVariants}
                    style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                  >
                    Tech Stack
                  </motion.h4>
                  <motion.div 
                    className="flex flex-wrap gap-1.5 sm:gap-2"
                    variants={containerVariants}
                  >
                    {item.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-white/90 text-black transition-all duration-200 hover:scale-105"
                        variants={textVariants}
                        style={{ fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Action buttons */}
                <motion.div 
                  className="flex gap-3 sm:gap-4"
                  variants={textVariants}
                >
                  {item.githubUrl && (
                    <button 
                      onClick={() => window.open(item.githubUrl, '_blank')} 
                      className="bg-primary-gray/60 backdrop-blur-sm border border-primary-gray/40 text-primary-white hover:bg-primary-green/20 hover:border-primary-green/50 ease-in-out duration-150 transition-all rounded-xl w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  )}
                  {item.liveUrl && (
                    <button 
                      onClick={() => window.open(item.liveUrl, '_blank')} 
                      className="bg-primary-gray/60 backdrop-blur-sm text-primary-white border border-primary-gray/40 hover:bg-primary-green/20 hover:border-primary-green/50 ease-in-out duration-150 transition-all rounded-xl w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </button>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-6 sm:left-8 md:left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-gray-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-primary-green via-primary-green/70 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};