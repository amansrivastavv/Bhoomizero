import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = ["Home", "Solutions", "Science & Tech", "Projects", "Insights", "About Us"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] 
                 bg-white/10 backdrop-blur-xl border border-white/20 
                 rounded-2xl shadow-lg z-50 px-6 py-3 flex items-center justify-between"
    >
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white tracking-wide">BHOOMIZERO</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex gap-8 text-white font-medium">
          {navItems.map((item, idx) => (
            <motion.li
              key={idx}
              whileHover={{ scale: 1.1, color: "#4ade80" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer hover:text-green-400"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        {/* Contact Us Button */}
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #22c55e" }}
          whileTap={{ scale: 0.95 }}
          className="ml-6 px-5 py-2 bg-green-500/90 text-white font-semibold 
                     rounded-xl shadow-md hover:bg-green-400 
                     transition-all duration-300"
        >
          Contact Us
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-xl rounded-b-2xl p-6 md:hidden"
        >
          <ul className="flex flex-col gap-6 text-white font-medium text-lg">
            {navItems.map((item, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.1, color: "#4ade80" }}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            ))}

            {/* Mobile Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px #22c55e" }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-5 py-2 bg-green-500/90 text-white font-semibold 
                         rounded-xl shadow-md hover:bg-green-400 
                         transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
