"use client";
import { useEffect, useRef } from 'react';

export default function Skills() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const languagesRef = useRef(null);
  const frameworksRef = useRef(null);
  const databasesRef = useRef(null);
  const toolsRef = useRef(null);

  useEffect(() => {
    // Load GSAP
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      const { gsap } = window;
      
      // ScrollTrigger plugin
      const scrollTriggerScript = document.createElement('script');
      scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      scrollTriggerScript.onload = () => {
        gsap.registerPlugin(window.ScrollTrigger);
        
        // Title animation - simple fade up
        gsap.fromTo(titleRef.current, 
          { 
            opacity: 0, 
            y: 30
          },
          { 
            opacity: 1, 
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Animate each section with simple fade up
        const sections = [languagesRef, frameworksRef, databasesRef, toolsRef];
        sections.forEach((sectionRef, index) => {
          // Section title animation
          gsap.fromTo(
            sectionRef.current.querySelector('h2'),
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Skill items animation
          gsap.fromTo(
            sectionRef.current.querySelectorAll('.skill-item'),
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });

        // Simple hover animations for skill items
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
          const img = item.querySelector('img');
          const text = item.querySelector('p');
          
          item.addEventListener('mouseenter', () => {
            gsap.to(item, {
              y: -5,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(img, { 
              scale: 1.1,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(text, { 
              color: '#3b82f6',
              duration: 0.3,
              ease: "power2.out"
            });
          });
          
          item.addEventListener('mouseleave', () => {
            gsap.to(item, {
              y: 0,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(img, { 
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(text, { 
              color: '#ffffff',
              duration: 0.3,
              ease: "power2.out"
            });
          });
        });
      };
      document.head.appendChild(scrollTriggerScript);
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="px-4 sm:px-35 bg-black text-white overflow-hidden pt-0"
    >
      <h1 ref={titleRef} className="text-3xl sm:text-5xl font-bold pb-6 sm:pb-10 mt-10 sm:mt-10 text-blue-400">Skills</h1>

      <div className="">
        {/* Programming Languages */}
        <div ref={languagesRef}>
          <h2 className="text-xl sm:text-4xl font-semibold mb-6 sm:mb-12">
            <span className='text-xl sm:text-4xl text-green-400'>Languages</span> I Know,
          </h2>
          <div className="flex items-center space-x-4 sm:space-x-10 mb-6 sm:mb-12">
            <div className="text-center skill-item cursor-pointer">
              <img src="/java.svg" alt="Java" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">Java</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/c.svg" alt="C" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">C</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/python.svg" alt="Python" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">Python</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/javascript.svg" alt="JavaScript" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">JavaScript</p>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div ref={frameworksRef}>
          <h2 className="text-xl sm:text-4xl font-semibold mb-6 sm:mb-12">
            <span className='text-xl sm:text-4xl text-blue-400'>Frameworks</span> I've Used,
          </h2>
          <div className="flex items-center space-x-4 sm:space-x-10 mb-6 sm:mb-12">
            <div className="text-center skill-item cursor-pointer">
              <img src="/nextjs.svg" alt="Next.js" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">Next.js</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/react.svg" alt="React.js" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">React.js</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/nodejs.svg" alt="Node.js" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">Node.js</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/expressjs.svg" alt="Express.js" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">Express.js</p>
            </div>
          </div>
        </div>

        {/* Databases and Cloud */}
        <div ref={databasesRef}>
          <h2 className="text-xl sm:text-4xl font-semibold mb-6 sm:mb-12">
            <span className='text-xl sm:text-4xl text-orange-400'>Databases</span> and <span className='text-xl sm:text-4xl text-green-400'>Cloud</span> I've Used,
          </h2>
          <div className="flex items-center space-x-4 sm:space-x-10 mb-6 sm:mb-12">
            <div className="text-center skill-item cursor-pointer">
              <img src="/mongodb.svg" alt="MongoDB" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">MongoDB</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/mysql.svg" alt="MySQL" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">MySQL</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/gcp.svg" alt="Google Cloud Platform" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">GCP</p>
            </div>
          </div>
        </div>

        {/* Developer & Designer Tools */}
        <div ref={toolsRef}>
          <h2 className="text-xl sm:text-4xl font-semibold mb-6 sm:mb-12">
            <span className='text-xl sm:text-4xl text-blue-400'>Developer/ Designer Tools</span> I've Worked With,
          </h2>
          <div className="flex items-center space-x-4 sm:space-x-10">
            <div className="text-center skill-item cursor-pointer">
              <img src="/git.svg" alt="Git" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">Git</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/github.svg" alt="GitHub" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">GitHub</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/figma.svg" alt="Figma" className="h-8 w-8 sm:h-16 sm:w-16 invert mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">Figma</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/vercel.svg" alt="Vercel" className="h-8 w-8 sm:h-16 sm:w-16 mx-auto" />
              <p className="mt-1 sm:mt-2 text-xs sm:text-base hover:text-blue-400">Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}