import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative bg-[#010102] text-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Background Animated Blobs (match Hero style) */}
      {/* <motion.div
        className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full bg-green-500/20 blur-[140px]"
        animate={{ x: [0, 60, -60, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[160px]"
        animate={{ x: [0, -80, 80, 0], y: [0, 60, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      /> */}
       <motion.div
        className="absolute bottom-20 -right-20 w-[600px] h-[600px] rounded-full bg-blue-500/20 blur-[160px]"
        animate={{ x: [0, -80, 80, 0], y: [0, 60, -60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center z-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold mb-6 leading-snug">
            Why <span className="text-green-400">Carbon Removal</span> Matters
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Carbon emissions are rising faster than ever, and traditional
            solutions aren’t enough. At{" "}
            <span className="text-green-400 font-semibold">
              Bhumi Zero-Carbon
            </span>
            , we design{" "}
            <span className="text-blue-400 font-semibold">
              risk-first, science-led solutions
            </span>{" "}
            to remove carbon at scale and restore balance to our planet.
          </p>

          <div className="grid gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-500/50"></span>
              <p className="text-gray-200">🌱 • <span className="font-semibold">Nature-Based Solutions (NBS) </span></p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-500/50"></span>
              <p className="text-gray-200">⚙️ • <span className="font-semibold">Carbon Dioxide Removal (CDR) Technologies </span></p>
            </div>
            
          </div>
        </motion.div>

        {/* Card*/}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-10 shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500">
            <h3 className="text-3xl font-semibold mb-4 text-green-400">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              Deliver 5 million tonnes of verified CO₂ removals annually by
              2030, helping close the global gap of up to 16 billion tonnes per
              year by 2050 (United Nations, IPCC).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
