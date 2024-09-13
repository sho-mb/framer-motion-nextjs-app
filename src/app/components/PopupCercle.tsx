"use client";

import { motion } from "framer-motion";
import React from "react";

export const PopupCercle = () => {
  return (
    <div className="p-12 border-white border-2 flex gap-4">
      <div className="flex flex-col gap-4">
        <div className="font-bold text-2xl">Demo animation</div>
        <div>What you can do?</div>
        <ul>
          <ol>1.Reload to pop</ol>
          <ol>2.Hover to be bigger</ol>
          <ol>3.Top to move</ol>
        </ul>
      </div>
      <motion.div
        className="w-[200px] h-[200px] bg-blue-600 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.4 }}
        whileTap={{ translateX: 800 }}
      />
    </div>
  );
};
