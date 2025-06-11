import React, { useEffect, useState, useRef } from "react";

const PortfolioLoader = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Mithra's Portfolio/>";
  const loaderRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    let charIndex = 0;
    
    const typeChar = () => {
      if (charIndex < fullText.length) {
        setText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(intervalRef.current);
        fadeOutAnimation();
      }
    };

    intervalRef.current = setInterval(typeChar, 200);

    const fadeOutAnimation = () => {
      if (loaderRef.current) {
        // CSS transition for fade out
        loaderRef.current.style.transition = 'opacity 0.8s ease-out';
        loaderRef.current.style.opacity = '0';
        
        // Call onComplete after animation
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 800);
      }
    };

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [onComplete, fullText]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 min-h-screen flex items-center justify-center bg-black text-white text-4xl font-mono z-50"
      style={{ opacity: 1 }}
    >
      <span className="relative">
        {text}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
};

export default PortfolioLoader;