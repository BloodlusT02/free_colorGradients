import React, { useEffect, useRef, useState } from "react";
import "./ColorPalette.css";
import colorPaletee from "../Gradients/colorPalette.js";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { copyToClipboard } from "./ColorGradient.jsx";
import toast, { Toaster } from "react-hot-toast";

const ColorPalette = () => {
  const [likes, setLikes] = useState(() => {
    try {
      const savedLikes = localStorage.getItem("likes");
      return savedLikes
        ? JSON.parse(savedLikes)
        : colorPaletee.map(() => ({ count: 0, liked: false }));
    } catch (error) {
      console.error("Failed to parse likes from localStorage", error);
      return colorPaletee.map(() => ({ count: 0, liked: false }));
    }
  });


  const divRefs = useRef([]);

  useEffect(() => {
    // Save the current likes state to localStorage
    try {
      localStorage.setItem("likes", JSON.stringify(likes));
    } catch (error) {
      console.error("Failed to save likes to localStorage", error);
    }
  }, [likes]);

  const handleLike = (index) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) =>
        i === index
          ? {
              count: like.liked ? like.count - 1 : like.count + 1,
              liked: !like.liked,
            }
          : like
      )
    );
  };

  useGSAP(() => {
    divRefs.current.forEach((div) => {
      const tl = gsap.timeline({ paused: true });

      tl.to(div, {
        width: "152px", // target width on hover
        duration: 0.3, // duration of the animation
        ease: "power2.out", // easing function
      });

      div.addEventListener("mouseenter", () => tl.play());
      div.addEventListener("mouseleave", () =>
        tl.reverse().then(() => {
          // Ensure the width resets properly
          gsap.set(div, { width: "76px" });
        })
      );

      return () => {
        div.removeEventListener("mouseenter", () => tl.play());
        div.removeEventListener("mouseleave", () => tl.reverse());
      };
    });
  }, []);

  return (
    <>
      <div className="px-2 md:px-10 overflow-auto no-scrollbar">
        <div className="dark:text-white">
          <h2 className="text-[3rem] font-bold font-inter text-center pt-8">
            Popular Color Palettes
          </h2>
          <p className="text-center text-[1.1rem] font-poppins mt-4 text-gray-500">
            Get inspired by thousands of beautiful <br />
            color schemes and make something cool!
          </p>
        </div>
        <div className="py-16 flex flex-wrap gap-10 justify-center overflow-hidden">
          {colorPaletee.map((color, index) => (
            <div className="part-1" key={color.id}>
              <div className="h-32 w-[380px] rounded-lg flex flex-grow overflow-hidden bg-black">
                {["first", "second", "third", "fourth", "fifth"].map(
                  (key, idx) => (
                    <div
                      ref={(el) => (divRefs.current[index * 5 + idx] = el)} // Store each div's ref
                      key={idx}
                      className="box-1 h-full w-[76px] cursor-pointer text-[0.95rem] tracking-wide flex items-center justify-center uppercase font-semibold font-inter text-transparent hover:text-white"
                      style={{ backgroundColor: `#${color[key]}` }}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the parent `onClick`
                        copyToClipboard(color[key]); // Copy gradient color
                      }}
                    >
                      {color[key]}
                    </div>
                  )
                )}
              </div>
              <div className="part-2 flex justify-end dark:text-white">
                <div
                  className="w-full flex gap-1 items-center justify-end pr-5 py-1 text-gray-400 cursor-pointer"
                  onClick={() => handleLike(index)} // Pass index to handleLike
                >
                  {likes[index].liked ? (
                    <IoMdHeart className="text-[1.1rem] text-red-500 font-bold" />
                  ) : (
                    <IoMdHeartEmpty className="text-[1.1rem] font-bold" />
                  )}
                  <p className="text-[0.9rem] font-medium">
                    {likes[index].count.toLocaleString()}
                  </p>
                </div>
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
      <hr className="dark:opacity-30" />
    </>
  );
};

export default ColorPalette;
