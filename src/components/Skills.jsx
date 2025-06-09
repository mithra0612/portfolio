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
        
        // Main title animation
        gsap.fromTo(titleRef.current, 
          { 
            opacity: 0, 
            y: 50,
            scale: 0.9
          },
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Languages section animation
        gsap.fromTo(languagesRef.current.querySelector('h2'),
          { opacity: 0, x: -50 },
          { 
            opacity: 1, 
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: languagesRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(languagesRef.current.querySelectorAll('.skill-item'),
          { opacity: 0, y: 30, rotateY: 45 },
          { 
            opacity: 1, 
            y: 0,
            rotateY: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: languagesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Frameworks section animation
        gsap.fromTo(frameworksRef.current.querySelector('h2'),
          { opacity: 0, x: -50 },
          { 
            opacity: 1, 
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: frameworksRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(frameworksRef.current.querySelectorAll('.skill-item'),
          { opacity: 0, y: 30, scale: 0.8 },
          { 
            opacity: 1, 
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
              trigger: frameworksRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Databases section animation
        gsap.fromTo(databasesRef.current.querySelector('h2'),
          { opacity: 0, x: -50 },
          { 
            opacity: 1, 
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: databasesRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(databasesRef.current.querySelectorAll('.skill-item'),
          { opacity: 0, x: -40, rotateX: 45 },
          { 
            opacity: 1, 
            x: 0,
            rotateX: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: databasesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Tools section animation
        gsap.fromTo(toolsRef.current.querySelector('h2'),
          { opacity: 0, x: -50 },
          { 
            opacity: 1, 
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: toolsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        gsap.fromTo(toolsRef.current.querySelectorAll('.skill-item'),
          { opacity: 0, y: 40, rotation: 10 },
          { 
            opacity: 1, 
            y: 0,
            rotation: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: toolsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Hover animations for skill items
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
          const img = item.querySelector('img');
          const text = item.querySelector('p');
          
          item.addEventListener('mouseenter', () => {
            gsap.to(img, { 
              scale: 1.2, 
              rotation: 5,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(text, { 
              y: -5,
              color: '#0092b8', // Explicitly set the hover color
              overwrite: true, // Ensure GSAP overwrites any conflicting styles
              duration: 0.3,
              ease: "power2.out"
            });
          });
          
          item.addEventListener('mouseleave', () => {
            gsap.to(img, { 
              scale: 1, 
              rotation: 0,
              duration: 0.3,
              ease: "power2.out"
            });
            gsap.to(text, { 
              y: 0,
              color: '#ffffff', // Reset to the original color
              overwrite: true, // Ensure GSAP overwrites any conflicting styles
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
      className="pt-10 px-35 bg-black text-white overflow-hidden"
    >
      <h1 ref={titleRef} className="text-5xl font-bold py-10">Skills</h1>

      <div className="">
        {/* Programming Languages */}
        <div ref={languagesRef}>
          <h2 className="text-3xl font-semibold mb-12"><span className='text-3xl text-cyan-600'>Languages</span> I Know,</h2>
          <div className="flex items-center space-x-10 mb-12">
            <div className="text-center skill-item cursor-pointer">
              <img src="/java.svg" alt="Java" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">Java</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/c.svg" alt="C" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">C</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/python.svg" alt="Python" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">Python</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/javascript.svg" alt="JavaScript" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">JavaScript</p>
            </div>
          </div>
        </div>

        {/* Frameworks */}
        <div ref={frameworksRef}>
          <h2 className="text-3xl font-semibold mb-12"><span className='text-3xl text-cyan-600'>Frameworks</span> I've Used,</h2>
          <div className="flex items-center space-x-10 mb-12">
            <div className="text-center skill-item cursor-pointer">
              <img src="/nextjs.svg" alt="Next.js" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">Next.js</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/react.svg" alt="React.js" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">React.js</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/nodejs.svg" alt="Node.js" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">Node.js</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/expressjs.svg" alt="Express.js" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">Express.js</p>
            </div>
          </div>
        </div>

        {/* Databases and Cloud */}
        <div ref={databasesRef}>
          <h2 className="text-3xl font-semibold mb-12"><span className='text-3xl text-cyan-600'>Databases</span> and <span className='text-3xl text-cyan-600'>Cloud</span> I've Used,</h2>
          <div className="flex items-center space-x-10 mb-12">
            <div className="text-center skill-item cursor-pointer">
              <img src="/mongodb.svg" alt="MongoDB" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">MongoDB</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/mysql.svg" alt="MySQL" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">MySQL</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/gcp.svg" alt="Google Cloud Platform" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">GCP</p>
            </div>
          </div>
        </div>

        {/* Developer & Designer Tools */}
        <div ref={toolsRef}>
          <h2 className="text-3xl font-semibold mb-12"><span className='text-3xl text-cyan-600'>Developer/ Designer Tools</span> I've Worked With,</h2>
          <div className="flex items-center space-x-10">
            <div className="text-center skill-item cursor-pointer">
              <img src="/git.svg" alt="Git" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">Git</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/github.svg" alt="GitHub" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">GitHub</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/figma.svg" alt="Figma" className="h-16 w-16 invert mx-auto" />
              <p className="mt-2 hover:text-cyan-600">Figma</p>
            </div>
            <div className="text-center skill-item cursor-pointer">
              <img src="/vercel.svg" alt="Vercel" className="h-16 w-16 mx-auto" />
              <p className="mt-2 hover:text-cyan-600">Vercel</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
