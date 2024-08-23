import React, { useEffect, useState } from "react";
import "./ColorBar.css";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ColorBar = () => {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState("");

  const navItems = [
    { name: "Palettes", path: "/" },
    { name: "Colors", path: "/colors" },
    { name: "Gradients", path: "/gradients" },
  ];

  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = navItems.find((item) => item.path === currentPath);
    if (currentItem) {
      setActiveNav(currentItem.name);
    } else {
      setActiveNav("Gradients"); // Default to Gradiens if no match
    }
  }, [location]);

  const handleNavClick = (navName) => {
    setActiveNav(navName);
  };

  return (
    <div className="fixed top-[60px] left-0 w-full z-40 bg-white dark:bg-black">
      <div className="mt-5">
        <hr className="dark:opacity-30" />
        <div className="h-14 flex items-center justify-center gap-3 md:gap-5 my-1">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path}>
              <motion.div
                onClick={() => handleNavClick(item.name)}
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.9 }}
                className={`
                markpro uppercase font-extrabold text-xs md:text-sm tracking-wide px-4 py-1 md:px-6 md:py-2 rounded-full 
                gradient-border dark:gradient-border-dark inline-block bg-transparent cursor-pointer 
                ${
                  activeNav === item.name
                    ? "dark:text-white text-black"
                    : "dark:text-gray-400 text-gray-400"
                } 
                dark:hover:text-white hover:text-black
              `}
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
        </div>
        <hr className="dark:opacity-30 shadow-md" />
      </div>
    </div>
  );
};

export default ColorBar;
