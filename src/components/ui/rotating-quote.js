import { useEffect, useState } from "react";

const quotes = [
  "Code is poetry with logic as its rhyme.",
  "Every bug is a metaphor waiting to be written.",
  "Brackets and verses, both need balance.",
  "Functions solve problems, poems soothe them.",
];

export default function RotatingQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 3000); // rotate every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-16 w-full overflow-hidden text-center">
      {quotes.map((quote, i) => (
        <div
          key={i}
          className={`absolute w-full transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl font-medium text-neutral-700 dark:text-neutral-200">
            {quote}
          </p>
        </div>
      ))}
    </div>
  );
}
