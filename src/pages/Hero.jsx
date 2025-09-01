"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import CleanBg from "../assets/CleanEarth.jpg";
import CleanTechBg from "../assets/cleanTechnology.png";
import PollutedBg from "../assets/polutedEarth.png";

const images = [
  { src: CleanBg, animation: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -50 }, transition: { duration: 1, ease: "easeOut" } } },
  { src: CleanTechBg, animation: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: 50 }, transition: { duration: 1.2, ease: "easeIn" } } },
  { src: PollutedBg, animation: { initial: { opacity: 0, scale: 1.2 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.8 }, transition: { duration: 1.5, ease: "linear" } } }
];

const MeshBackground = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Bhumi Zero-Carbon";

  const [currentIndex, setCurrentIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, [fullText]);

  // Slide show effect (faster)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // switch every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background slideshow */}
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={`Background ${currentIndex}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={images[currentIndex].animation.initial}
          animate={images[currentIndex].animation.animate}
          exit={images[currentIndex].animation.exit}
          transition={images[currentIndex].animation.transition}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black opacity-40 z-5"></div>
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center backdrop-blur-[2px]">
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
};

export default MeshBackground;
