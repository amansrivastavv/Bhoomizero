"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Globe, FlaskRound } from "lucide-react";
import { useInView } from "react-intersection-observer";
import BackgroundImg from "../assets/dataInfoimage.png";
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

  // Count-up hook that starts only when inView becomes true
  const useCountUp = (target, duration = 1500, startCounting) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!startCounting) return;

      let start = 0;
      const stepTime = 16; // ~60fps
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
    <div className="relative w-full">
      <img src={BackgroundImg} alt="Background Image" className="absolute w-full h-full object-cover" />
      <div className="flex flex-wrap justify-center gap-20 px-4 py-16">
        {rowData.map((service, index) => {
          const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
          const count = useCountUp(service.data, 1500, inView);

          return (
            <motion.div
              ref={ref}
              key={index}
              initial={{ opacity: 0, y: 60 }}               
              animate={inView ? { opacity: 1, y: 0 } : {}}   
              transition={{
                duration: 0.8,                              
                delay: index * 0.2,
                ease: "easeOut",                              
              }}
              whileHover={{
                scale: 1.05,                                 
                transition: { duration: 0.2, ease: "easeOut" } 
              }}
              className="relative w-80 md:w-90 md:p-8 p-4 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/30 shadow-lg cursor-pointer"
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
