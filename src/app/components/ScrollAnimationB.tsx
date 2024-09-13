"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

// 1animationあたり１つのVariantsを設定
const motionVariants: Variants = {
  // 初期位置
  offscreen: {
    x: 1600,
  },
  // アクション位置
  onscreen: {
    x: 200,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.3,
    },
  },
};

export const ScrollAnimationB = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false }}
    >
      <motion.div className="text-7xl" variants={motionVariants}>
        🐕
      </motion.div>
    </motion.div>
  );
};
