"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MeshBackground() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Bhumi Zero-Carbon";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 90); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Animated Blobs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-green-500 opacity-30 blur-3xl"
        animate={{ x: [0, 200, -200, 0], y: [0, -200, 200, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-500 opacity-30 blur-3xl"
        animate={{ x: [100, -200, 200, 100], y: [-100, 200, -200, -100] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          {displayedText}
          <span className="animate-pulse">|</span> 
        </h1>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-lg md:text-3xl font-medium mb-4 max-w-2xl leading-relaxed"
        >
          Unlocking Carbon Removals at Scale with Risk-First, Science-Led Design
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="text-sm md:text-base max-w-3xl text-gray-200 leading-relaxed"
        >
          We are a next-generation carbon project developer, delivering durable,
          high-quality removals through nature-based solutions and engineered
          carbon removal technologies.
        </motion.p>
      </div>
    </div>
  );
}
