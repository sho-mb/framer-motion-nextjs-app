"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

export const MotionValues = () => {
  const x = useMotionValue(0);
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)",
  ]);
  const color = useTransform(x, xInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)",
  ]);
  const tickPath = useTransform(x, [10, 100], [0, 1]);
  const crossPathA = useTransform(x, [-10, -55], [0, 1]);
  const crossPathB = useTransform(x, [-50, -100], [0, 1]);
  return (
    <motion.div className="p-12 relative" style={{ background }}>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-2xl">Motion Value</div>
        <div>Move to X cordinate</div>
        <div className="flex flex-col gap-3">
          <p>
            Set useMotionValue to val which is hold current value
            <br /> as well as set min and max limit in array{" "}
          </p>
          <p>
            In this case use, Givine [-100, 0 100] to XInput means x goes to
            -100 to 100 between
            <br /> set useMotionValue and array to useTransform and set 3 value
            <br /> when the value is between -100 to 0, 0, 0 to 100
          </p>
          <p>
            The style will change depends on the cordinate of X
            <br /> set relative value of pattern as above
          </p>
        </div>
      </div>
      <motion.div
        className="w-[200px] h-[200px] bg-white rounded-md m-auto absolute top-20 left-1/2"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
      >
        <svg className="progress-icon" viewBox="0 0 50 50">
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{ translateX: 5, translateY: 5 }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M14,26 L 22,33 L 35,16"
            strokeDasharray="0 1"
            style={{ pathLength: tickPath }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M17,17 L33,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathA }}
          />
          <motion.path
            fill="none"
            strokeWidth="2"
            stroke={color}
            d="M33,17 L17,33"
            strokeDasharray="0 1"
            style={{ pathLength: crossPathB }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};
