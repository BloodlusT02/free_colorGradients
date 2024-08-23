import React, { useEffect, useRef, useState } from "react";
import colors from "../Gradients/colors";
import { copyToClipboard } from "./ColorGradient";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Colors = ({ num, color }) => {
  const colorNum = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "950",
  ];

  return (
    <>
      <div className="dark:text-white min-h-screen px-4 sm:px-6 md:px-10 lg:px-36 pb-8 overflow-auto no-scrollbar">
        <div className="font-inter mt-6">
          <h2 className="text-3xl sm:text-4xl md:text-[3rem] font-bold mt-8">
            Customizing Colors
          </h2>
          <p className="text-base sm:text-lg md:text-[1.1rem] font-poppins text-gray-500 mt-5">
            Customizing the default color palette for your project.
          </p>
        </div>
        <div className="dark:text-white font-inter mt-8">
          {colors.map((color) => (
            <div key={color.name} className="mb-8">
              <div className="text-lg sm:text-xl md:text-[1.1rem] tracking-wide capitalize font-semibold mb-4">
                {color.name}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-6 md:grid-cols-12 gap-2 sm:gap-4">
                {colorNum.map((num) => (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(color[num]);
                    }}
                    key={num}
                    className="flex flex-col cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-full h-12 sm:h-16 md:h-20 bg-white rounded-md border-[1.6px] border-gray-500"
                      style={{ backgroundColor: color[num] }}
                    ></motion.div>
                    <p className="dark:text-white text-xs sm:text-sm font-medium mt-1 pl-1">
                      {num}
                    </p>
                    <p className="text-gray-500 text-xs tracking-wider pl-1">
                      {color[num]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toaster toastOptions={{
        style: {
          backgroundColor: "#1e293b",
          borderRadius: "60px",
          padding: '14px 30px',
          color: "white"
        }
      }} position="bottom-center" />
    </>
  );
};

export default Colors;
