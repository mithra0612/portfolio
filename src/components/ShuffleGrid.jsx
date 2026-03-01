"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/assets/tancam-hero.jpg",
  },
  {
    id: 2,
    src: "/assets/sih-stage-hero.jpg",
  },
  {
    id: 3,
    src: "/assets/sih-2-hero.jpg",
  },
  {
    id: 4,
    src: "/assets/hack25-1-hero.jpg",
  },
  {
    id: 5,
    src: "/assets/medals-hero.jpg",
  },
  {
    id: 6,
    src: "/assets/sih-3-hero.jpg",
  },
  {
    id: 7,
    src: "/assets/hack25-2-hero.jpg",
  },
  {
    id: 8,
    src: "/assets/keren-hero.jpg",
  },
  {
    id: 9,
    src: "/assets/nexathon-hero.jpg",
  },
  {
    id: 10,
    src: "/assets/poetry1-hero.jpg",
  },
  {
    id: 11,
    src: "/assets/poetry2-hero.jpg",
  },
  {
    id: 12,
    src: "/assets/sih-4-hero.jpg",
  },
  {
    id: 13,
    src: "/assets/hackit-hero.jpg",
  },
  {
    id: 14,
    src: "/assets/sih-5-hero.jpg",
  },
  {
    id: 15,
    src: "/assets/nexathon-1-hero.jpg",
  },
  {
    id: 16,
    src: "/assets/sih-mic-hero.jpg",
  },
];

// Generate static initial grid (no shuffle on first render)
const generateSquares = (shouldShuffle = false) => {
  const data = shouldShuffle ? shuffle([...squareData]) : squareData;
  
  return data.map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full relative overflow-hidden"
    >
      <Image
        src={sq.src}
        alt="Portfolio image"
        fill
        sizes="(max-width: 768px) 25vw, 12vw"
        className="object-cover"
        priority={true}
        loading="eager"
        quality={85}
      />
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(() => generateSquares(false));

  useEffect(() => {
    // Wait 2 seconds before first shuffle to let images load
    const initialTimeout = setTimeout(() => {
      setSquares(generateSquares(true));
    }, 2000);
    
    const shuffleSquares = () => {
      setSquares(generateSquares(true));
      timeoutRef.current = setTimeout(shuffleSquares, 3000);
    };

    // Start continuous shuffling after initial delay
    const continuousShuffleTimeout = setTimeout(() => {
      shuffleSquares();
    }, 5000); // First shuffle at 2s, then continuous from 5s

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(continuousShuffleTimeout);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares}
    </div>
  );
};

export default ShuffleGrid;
