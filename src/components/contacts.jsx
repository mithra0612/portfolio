import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Clock,
  MapPin,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactsSection() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef(null);
  const statusRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const contactLinksRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(
        [
          statusRef.current,
          titleRef.current,
          descriptionRef.current,
          contactLinksRef.current,
          cardsRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      // Entrance animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(statusRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          contactLinksRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          cardsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        );

      // Contact links hover animations
      const contactLinks = contactLinksRef.current?.querySelectorAll("a");
      contactLinks?.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          gsap.to(link, {
            scale: 1.1,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        link.addEventListener("mouseleave", () => {
          gsap.to(link, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("mithramadhu005@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status Badge */}
        <div
          ref={statusRef}
          className="flex items-center justify-center sm:justify-start gap-3 mb-12"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-green-400 text-sm sm:text-base font-medium">
            Available for new projects
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-stretch">
          {/* Left Side - Main Content */}
          <div className="flex flex-col justify-between min-h-full">
            <div className="space-y-8">
              <div>
                <h2
                  ref={titleRef}
                  className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 leading-[1.1] text-white"
                >
                  Let's work
                  <br />
                  <span className="text-blue-400">together</span>
                </h2>
                <p
                  ref={descriptionRef}
                  className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-lg text-justify"
                >
                  I am always eager to explore new opportunities and highly enthusiastic about collaborating on meaningful, forward-thinking projects that drive innovation, growth, and positive impact.
                </p>
              </div>

              {/* Contact Links */}
              <div className="space-y-6">
                <div
                  ref={contactLinksRef}
                  className="flex items-center gap-6"
                >
                  <a
                    href="mailto:mithramadhu005@gmail.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mithra0612/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/mithra0612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div ref={cardsRef} className="flex flex-col space-y-4 min-h-full">
            {/* Availability Card */}
            <div className="rounded-lg bg-gray-900 p-5 flex-1">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">
                  Availability
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock
                      size={18}
                      className="text-gray-400 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <div className="font-medium text-white text-sm">
                        Response Time
                      </div>
                      <div className="text-gray-400 text-sm">
                        Usually within 24 hours
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="text-gray-400 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <div className="font-medium text-white text-sm">
                        Timezone
                      </div>
                      <div className="text-gray-400 text-sm">
                        Indian Standard Time (IST)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Call Card */}
            <div className="rounded-lg bg-gray-900 p-5 flex-1">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-green-400">
                  Schedule a Call
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Let's discuss your project and explore how we can work together.
                </p>
                <a
                  href="https://cal.com/madhumithra-m/30min?user=madhumithra-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2.5 rounded transition-colors duration-200"
                >
                  Book a call
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}