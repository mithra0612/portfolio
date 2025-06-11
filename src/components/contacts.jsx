"use client";
import {
  Mail,
  Twitter,
  Linkedin,
  Github,
  ArrowRight,
  Copy,
  Clock,
  MapPin,
  CheckCircle,
  Calendar,
  MailIcon,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function ContactsSection() {
  const [copied, setCopied] = useState(false);
  const [projectCount] = useState(47);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const sectionRef = useRef(null);
  const elementsRef = useRef([]);

  const copyEmail = () => {
    navigator.clipboard.writeText("mithramadhu005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.dataset.animateIndex]));
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const setElementRef = (index) => (el) => {
    elementsRef.current[index] = el;
  };

  const getAnimationClass = (index, type = 'fadeUp') => {
    const baseClasses = 'transition-all duration-700 ease-out';
    const isVisible = visibleElements.has(index.toString());
    
    const animations = {
      fadeUp: isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8',
      fadeLeft: isVisible 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 translate-x-8',
      fadeRight: isVisible 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 -translate-x-8',
      scale: isVisible 
        ? 'opacity-100 scale-100' 
        : 'opacity-0 scale-95'
    };
    
    return `${baseClasses} ${animations[type]}`;
  };

  return (
    <section ref={sectionRef} className="bg-black text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border border-cyan-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-cyan-400 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-1/3 w-32 h-32 border border-cyan-400 rotate-45"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Status Badge */}
        <div 
          ref={setElementRef(0)}
          data-animate-index="0"
          className={`flex items-center justify-center gap-2 mb-12 ${getAnimationClass(0, 'scale')}`}
          style={{ transitionDelay: '0ms' }}
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-sm font-medium">
            Available for new projects
          </span>
        </div>

        {/* Main Split Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE - Main Heading & Contact */}
          <div className="space-y-10">
            <div>
              <h2 
                ref={setElementRef(1)}
                data-animate-index="1"
                className={`text-6xl lg:text-7xl font-light mb-8 leading-tight ${getAnimationClass(1, 'fadeRight')}`}
                style={{ transitionDelay: '200ms' }}
              >
                Have a project in
                <span className="text-cyan-400 block font-normal animate-pulse">
                  mind?
                </span>
              </h2>
              <p 
                ref={setElementRef(2)}
                data-animate-index="2"
                className={`text-gray-400 text-xl leading-relaxed mb-10 ${getAnimationClass(2, 'fadeUp')}`}
                style={{ transitionDelay: '400ms' }}
              >
                Let's collaborate and create something amazing together. I'm
                always excited to hear about new opportunities.
              </p>
            </div>

            {/* Get in Touch */}
            <div>
              <p 
                ref={setElementRef(3)}
                data-animate-index="3"
                className={`text-gray-500 text-sm uppercase tracking-wider mb-6 ${getAnimationClass(3, 'fadeUp')}`}
                style={{ transitionDelay: '600ms' }}
              >
                Get in touch
              </p>

              <div 
                ref={setElementRef(4)}
                data-animate-index="4"
                className={`flex items-center gap-4 mb-6 ${getAnimationClass(4, 'fadeUp')}`}
                style={{ transitionDelay: '700ms' }}
              >
                <a
                  href="mailto:mithramadhu005@gmail.com"
                  className="text-cyan-400 hover:text-white transition-colors text-3xl font-medium hover-glow"
                >
                  mithramadhu005@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  className="text-gray-500 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-gray-900/50"
                  title="Copy email"
                >
                  {copied ? (
                    <CheckCircle size={24} className="text-green-400" />
                  ) : (
                    <Copy size={24} />
                  )}
                </button>
              </div>

              {/* Social Links */}
              <div 
                ref={setElementRef(5)}
                data-animate-index="5"
                className={`flex gap-4 ${getAnimationClass(5, 'fadeUp')}`}
                style={{ transitionDelay: '800ms' }}
              >
                {[
                  { icon: MailIcon, href: "mailto:mithramadhu005@gmail.com", label: "Mail" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/madhumithra-m/", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/mithra0612", label: "GitHub" },
                ].map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={label}
                    href={href}
                    className="text-gray-600 hover:text-cyan-400 transition-all duration-300 p-3 rounded-full hover:bg-gray-900/50 hover:scale-110 transform border border-gray-800"
                    aria-label={label}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transitionDelay: `${900 + index * 100}ms`
                    }}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Details & Actions */}
          <div className="space-y-8">
            {/* Timezone & Availability */}
            <div 
              ref={setElementRef(6)}
              data-animate-index="6"
              className={`bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 ${getAnimationClass(6, 'fadeLeft')}`}
              style={{ transitionDelay: '500ms' }}
            >
              <h3 className="text-xl font-semibold mb-6 text-cyan-400">
                Availability
              </h3>
              <div className="space-y-4">
                <div 
                  className={`flex items-center gap-3 text-gray-300 transition-all duration-500 ${
                    visibleElements.has('6') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: '700ms' }}
                >
                  <Clock size={20} />
                  <div>
                    <div className="font-medium">Response Time</div>
                    <div className="text-gray-500 text-sm">
                      Usually within 24 hours
                    </div>
                  </div>
                </div>
                <div 
                  className={`flex items-center gap-3 text-gray-300 transition-all duration-500 ${
                    visibleElements.has('6') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                >
                  <MapPin size={20} />
                  <div>
                    <div className="font-medium">Timezone</div>
                    <div className="text-gray-500 text-sm">
                      Indian Standard Time (IST)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Book a Call CTA */}
            <div 
              ref={setElementRef(7)}
              data-animate-index="7"
              className={`bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-800/50 ${getAnimationClass(7, 'fadeLeft')}`}
              style={{ transitionDelay: '700ms' }}
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                Ready to start?
              </h3>
              <p 
                className={`text-gray-400 mb-6 transition-all duration-500 ${
                  visibleElements.has('7') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '900ms' }}
              >
                Curious to collaborate, discuss ideas, or just talk tech? I’m always open to meaningful conversations and creative opportunities.
              </p>

              <a
                href="https://cal.com/madhumithra-m/30min?user=madhumithra-m"
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 w-full justify-center shadow-lg hover:shadow-cyan-400/25 mb-4 ${
                  visibleElements.has('7') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                Book a call
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <p 
                className={`text-gray-600 text-sm text-center transition-all duration-500 ${
                  visibleElements.has('7') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}
                style={{ transitionDelay: '1100ms' }}
              >
                Reach Out — no pressure, just possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .hover-glow:hover {
            text-shadow: 0 0 10px rgba(34, 211, 238, 0.5);
          }
        `
      }} />
    </section>
  );
}