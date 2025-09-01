"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Globe, FlaskRound } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function DataInfoPage() {
  const rowData = [
    {
      data: 50000,
      suffix: "+",
      desc: "Tons CO₂ Removed",
      icon: <Leaf className="w-12 h-12 text-green-400" />,
      color: "text-green-400",
    },
    {
      data: 20,
      suffix: "+",
      desc: "Projects Globally",
      icon: <Globe className="w-12 h-12 text-blue-400" />,
      color: "text-blue-400",
    },
    {
      data: 100,
      suffix: "%",
      desc: "Science-Backed",
      icon: <FlaskRound className="w-12 h-12 text-purple-400" />,
      color: "text-purple-400",
    },
  ];

  const useCountUp = (target, duration = 1500, startCounting) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCounting) return;

      let start = 0;
      const stepTime = 16;
      const increment = target / (duration / stepTime);

      const step = () => {
        start += increment;
        if (start >= target) {
          setCount(target);
        } else {
          setCount(Math.floor(start));
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }, [target, duration, startCounting]);

    return count;
  };

  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* 🌌 Dark Background Design */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-black to-gray-800 opacity-90"></div>

        {/* Floating animated blobs */}
        <motion.div
          className="absolute w-72 h-72 bg-green-900 rounded-full opacity-15 blur-3xl top-10 left-1/4"
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-900 rounded-full opacity-10 blur-3xl top-1/3 right-1/4"
          animate={{ y: [0, -20, 0], x: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-purple-900 rounded-full opacity-10 blur-3xl bottom-10 left-1/3"
          animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Stats Section */}
      <div className="relative z-10 flex flex-wrap justify-center gap-16 px-4">
        {rowData.map((service, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
          const count = useCountUp(service.data, 1500, inView);

          return (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="relative w-60 md:w-80 p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg cursor-pointer"
            >
              <div className="flex flex-col items-start gap-4">
                {service.icon}
                <span className={`text-6xl font-extrabold ${service.color}`}>
                  {count.toLocaleString()}
                  {service.suffix}
                </span>
                <span className="text-gray-200 text-xl font-semibold text-center">
                  {service.desc}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}



// "use client"; 
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";

// export default function MeshBackground() {
//   const [displayedText, setDisplayedText] = useState("");
//   const fullText = "Bhumi Zero-Carbon";

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const blobX1 = useTransform(mouseX, [0, window.innerWidth], [-40, 40]);
//   const blobY1 = useTransform(mouseY, [0, window.innerHeight], [-40, 40]);
//   const blobX2 = useTransform(mouseX, [0, window.innerWidth], [40, -40]);
//   const blobY2 = useTransform(mouseY, [0, window.innerHeight], [40, -40]);
//   const blobX3 = useTransform(mouseX, [0, window.innerWidth], [-60, 60]);
//   const blobY3 = useTransform(mouseY, [0, window.innerHeight], [60, -60]);

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setDisplayedText(fullText.slice(0, index + 1));
//       index++;
//       if (index === fullText.length) clearInterval(interval);
//     }, 90);
//     return () => clearInterval(interval);
//   }, [fullText]);

//   const handleMouseMove = (e) => {
//     mouseX.set(e.clientX);
//     mouseY.set(e.clientY);
//   };

//   // Scroll trigger for stats
//   const { ref: statsRef, inView: statsInView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <div
//       className="relative h-screen w-full overflow-hidden bg-black text-white"
//       onMouseMove={handleMouseMove}
//     >
//       {/* Ambient Blobs */}
//       <motion.div
//         className="absolute w-[400px] h-[400px] rounded-full bg-green-500 opacity-20 blur-2xl"
//         style={{ x: blobX1, y: blobY1 }}
//         animate={{ rotate: 360 }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div
//         className="absolute w-[300px] h-[300px] rounded-full bg-blue-500 opacity-20 blur-2xl"
//         style={{ x: blobX2, y: blobY2 }}
//         animate={{ rotate: -360 }}
//         transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
//       />
//       <motion.div
//         className="absolute w-[500px] h-[500px] rounded-full bg-purple-500 opacity-10 blur-3xl"
//         style={{ x: blobX3, y: blobY3 }}
//         animate={{ rotate: 360 }}
//         transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
//       />

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
//         <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
//           {displayedText}
//           <span className="animate-pulse text-green-400">|</span>
//         </h1>

//         <motion.h3
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2, duration: 0.8 }}
//           className="text-lg md:text-2xl lg:text-3xl font-medium mb-4 max-w-3xl leading-relaxed"
//         >
//           Unlocking Carbon Removals at Scale with Risk-First, Science-Led Design
//         </motion.h3>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 3, duration: 0.8 }}
//           className="text-sm md:text-base max-w-3xl text-gray-300 leading-relaxed"
//         >
//           We are a next-generation carbon project developer, delivering durable,
//           high-quality removals through nature-based solutions and engineered
//           carbon removal technologies.
//         </motion.p>

//         {/* Stats Section with Counting */}
//         <div
//           ref={statsRef}
//           className="flex gap-6 mt-8 flex-wrap justify-center"
//         >
//           <div className="text-center">
//             <p className="text-2xl md:text-3xl font-bold text-green-400">
//               {statsInView ? <CountUp end={50000} duration={2} separator="," /> : "0"}
//               +
//             </p>
//             <p className="text-gray-300 text-sm md:text-base">Tons CO₂ Removed</p>
//           </div>
//           <div className="text-center">
//             <p className="text-2xl md:text-3xl font-bold text-green-400">
//               {statsInView ? <CountUp end={20} duration={2} /> : "0"}+
//             </p>
//             <p className="text-gray-300 text-sm md:text-base">Projects Globally</p>
//           </div>
//           <div className="text-center">
//             <p className="text-2xl md:text-3xl font-bold text-green-400">
//               {statsInView ? <CountUp end={100} duration={2} /> : "0"}%
//             </p>
//             <p className="text-gray-300 text-sm md:text-base">Science-Backed</p>
//           </div>
//         </div>

//         <motion.div
//           className="mt-10 text-green-400 animate-bounce"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 3 }}
//         >
//           ↓ Scroll to Explore ↓
//         </motion.div>
//       </div>
//     </div>
//   );
// }