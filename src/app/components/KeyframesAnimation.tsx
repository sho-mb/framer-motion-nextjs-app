"use client";
import { motion } from "framer-motion";
import React from "react";

export const KeyframesAnimation = () => {
  return (
    <div className="p-12 bg-red-600 flex">
      <div className="flex flex-col gap-4 mr-40">
        <h3 className="font-bold text-2xl">Keyframe demo</h3>
        <div>Strategy</div>
        <p>
          In animate valiable, you can add scale,
          <br /> rotate any animations.
        </p>
        <p>
          Use array in each animations,
          <br />
          you can controll how they move
        </p>
      </div>
      <motion.div
        className="w-[200px] h-[200px] bg-white"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
};
