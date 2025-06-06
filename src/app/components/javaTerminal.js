import React, { useState, useEffect } from 'react';

export default function JavaTerminal() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    'public class Developer {',
    '    public static void main(String[] args) {',
    '        System.out.println("Name: Madhumithra");',
    '        System.out.println("Roles:");',
    '        System.out.println("  - Fullstack Developer");',
    '        System.out.println("  - UI Designer");',
    '        System.out.println("Interests:");',
    '        System.out.println("  - Web Development");',
    '        System.out.println("  - Web Designing");',
    '        System.out.println("  - DSA");',
    '        System.out.println("  - Cloud");',
    '    }',
    '}'
  ];

  // Typewriter effect
  useEffect(() => {
    if (currentLineIndex < terminalLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, terminalLines[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }, 800); // Delay between lines

      return () => clearTimeout(timer);
    }
  }, [currentLineIndex, terminalLines]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className="font-mono text-sm md:text-base text-green-400 p-6 max-w-2xl">
      <div className="space-y-1">
        {displayedLines.map((line, index) => (
          <div key={index} className="whitespace-pre">
            {line}
          </div>
        ))}
        {currentLineIndex >= terminalLines.length && (
          <div className="flex items-center mt-2">
            <span className="text-green-400">$</span>
            <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
          </div>
        )}
      </div>
    </div>
  );
}