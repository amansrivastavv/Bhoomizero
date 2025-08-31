"use client"; 
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function MeshBackground() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Bhumi Zero-Carbon";

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const blobX1 = useTransform(mouseX, [0, window.innerWidth], [-40, 40]);
  const blobY1 = useTransform(mouseY, [0, window.innerHeight], [-40, 40]);
  const blobX2 = useTransform(mouseX, [0, window.innerWidth], [40, -40]);
  const blobY2 = useTransform(mouseY, [0, window.innerHeight], [40, -40]);
  const blobX3 = useTransform(mouseX, [0, window.innerWidth], [-60, 60]);
  const blobY3 = useTransform(mouseY, [0, window.innerHeight], [60, -60]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, [fullText]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black text-white"
      onMouseMove={handleMouseMove}
    >
      {/*  Ambient Blobs */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-green-500 opacity-20 blur-2xl"
        style={{ x: blobX1, y: blobY1 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-blue-500 opacity-20 blur-2xl"
        style={{ x: blobX2, y: blobY2 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-500 opacity-10 blur-3xl"
        style={{ x: blobX3, y: blobY3 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          {displayedText}
          <span className="animate-pulse text-green-400">|</span>
        </h1>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-lg md:text-2xl lg:text-3xl font-medium mb-4 max-w-3xl leading-relaxed"
        >
          Unlocking Carbon Removals at Scale with Risk-First, Science-Led Design
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="text-sm md:text-base max-w-3xl text-gray-300 leading-relaxed"
        >
          We are a next-generation carbon project developer, delivering durable,
          high-quality removals through nature-based solutions and engineered
          carbon removal technologies.
        </motion.p>

        <div className="flex gap-6 mt-8 flex-wrap justify-center">
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-green-400">50K+</p>
            <p className="text-gray-300 text-sm md:text-base">Tons CO₂ Removed</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-green-400">20+</p>
            <p className="text-gray-300 text-sm md:text-base">Projects Globally</p>
          </div>
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-green-400">100%</p>
            <p className="text-gray-300 text-sm md:text-base">Science-Backed</p>
          </div>
        </div>

        <motion.div
          className="mt-10 text-green-400 animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          ↓ Scroll to Explore ↓
        </motion.div>
      </div>
    </div>
  );
}
