import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import color from "../Gradients/colorGradient.js";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

export const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      toast.success('Color copied to clipboard!'); // Show success notification
    })
    .catch((error) => {
      console.error('Failed to copy: ', error);
      toast.error('Failed to copy!'); // Show error notification
    });
};


const ColorGradient = () => {

  return (
    <>
      <div className="px-6 md:px-10 lg:px-36">
        <div className="pt-8 nine-sixty:w-[100%] lg:w-[90%]">
          <h1 className="text-[2rem] nine-sixty:text-[3.2rem] leading-snug dark:text-white">
            The free platform of{" "}
            <i className="text-[#4f46e5] dark:text-[#ec4899] font-light font-ibm-plex">
              48 linear gradients
            </i>{" "}
            curated by designers to use as content backgrounds in any piece of
            digital art.
          </h1>
        </div>
        <div className="mt-10 flex flex-col six-twenty:flex-row six-twenty:flex-wrap six-twenty:justify-center lg:justify-start py-10 gap-6">
          {color.map((gradient, index) => {
            return (
              <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the parent `onClick`
                copyToClipboard(gradient.colorGradient); // Copy gradient color
              }}
                key={index}
                style={{ background: gradient.colorGradient }}
                className={`w-full h-[380px] six-twenty:w-[270px] relative cursor-pointer`}
              >
                <p className="text-white font-roboto font-light -rotate-90 absolute top-6 w-fit">
                  {gradient.color}
                </p>
                <p className="flex gap-3 items-center font-light text-[0.9rem] text-white absolute bottom-3 font-roboto left-4">
                  {gradient.gradientStart}{" "}
                  <span className="">
                    <MdOutlineArrowRightAlt size={22} />
                  </span>{" "}
                  {gradient.gradientEnd}
                </p>
                <i className="ri-file-copy-line text-white absolute right-4 bottom-2 text-[1.2rem] cursor-pointer hover:scale-125 transition ease-in-out"></i>
              </motion.div>
            );
          })}
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
      <hr className="dark:opacity-30" />
    </>
  );
};

export default ColorGradient;
