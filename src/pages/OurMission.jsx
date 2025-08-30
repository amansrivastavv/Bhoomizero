import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import EarthImg from "../assets/earthimg.png";

gsap.registerPlugin(ScrollTrigger);

const missions = [
  {
    title: "🌱 Carbon Removal",
    text: "We develop carbon removal technologies that are risk-first and science-led.",
  },
  {
    title: "🌳 Nature-Based Solutions",
    text: "Working with nature to unlock scalable, durable solutions.",
  },
  {
    title: "♻️ Sustainability First",
    text: "Every project we deliver is built around long-term sustainability.",
  },
  {
    title: "🌍 Global Impact",
    text: "Our mission is to impact climate change globally with innovative projects.",
  },
];

const Mission = () => {
  const earthRef = useRef();
  const pathRef = useRef();

  useEffect(() => {
    // Earth rotation 
    gsap.to(earthRef.current, {
      rotate: 360,
      duration: 90,
      repeat: -1,
      ease: "linear",
    });

    gsap.to(earthRef.current, {
      y: 20,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    // Animate SVG path stroke scroll
    gsap.fromTo(
      pathRef.current,
      { strokeDasharray: 800, strokeDashoffset: 800 },
      {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: "#mission-section",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      id="mission-section"
      className="relative min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-green-900 text-white flex flex-col md:flex-row overflow-hidden"
    >
      {/*  Animated Timeline*/}
      <div className="w-full md:w-1/2 px-8 md:px-16 py-20 relative">
        {/* SVG Timeline Path */}
        <svg
          className="absolute left-10 top-20 bottom-20"
          width="4"
          height="100%"
          viewBox="0 0 4 1000"
          preserveAspectRatio="none"
        >
          <motion.path
            ref={pathRef}
            d="M2 0 L2 1000"
            stroke="url(#grad)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>
          </defs>
        </svg>

 <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center md:text-left md:ml-16">
  🌍 Our Mission
</h1>

        {/* Mission cards */}
        <div className="space-y-28 ml-20 relative z-10">
          {missions.map((mission, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/20 backdrop-blur-md border border-gray-700/50 shadow-lg hover:shadow-green-500/20 transition-all"
            >
              {/* Connector Line */}
              <span className="absolute -left-14 top-6 w-8 h-0.5 bg-green-400"></span>
              {/* Pulse Marker */}
              <span className="absolute -left-20 top-3 w-5 h-5 rounded-full bg-green-400 shadow-[0_0_15px_rgba(34,197,94,0.8)] animate-pulse"></span>

              <h2 className="text-2xl font-semibold text-green-400">
                {mission.title}
              </h2>
              <p className="mt-3 text-gray-300 text-lg max-w-md leading-relaxed">
                {mission.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/*  Earth glow effect & space particles */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10 relative">
        {/* Glow aura */}
        <div className="absolute w-[520px] h-[520px] rounded-full bg-green-500/25 blur-[120px]" />

        {/* Space particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ opacity: 0 }}
              animate={{
                x: Math.random() * 600 - 300,
                y: Math.random() * 600 - 300,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <img
          ref={earthRef}
          src={EarthImg}
          alt="Earth"
          className="w-[350px] md:w-[650px] drop-shadow-[0_0_40px_rgba(34,197,94,0.6)] relative z-10"
        />
      </div>
    </div>
  );
};

export default Mission;
