"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";

export const DragObject = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      <div className="bg-white p-12 flex" ref={constraintsRef}>
        <div className="flex flex-col gap-4 mr-40 text-black">
          <h3 className="font-bold text-2xl">Drag Object</h3>
          <div>Move this object {"=>"} </div>
          <p>
            Use {"drag"} in <strong>{"<motion.div />"}</strong>
          </p>
          <p>
            UseRef to controll range of object
            <br /> give ref to object of dragConstraints in motion tag
          </p>
        </div>
        <motion.div
          drag
          className="w-[100px] h-[100px] bg-red-500"
          dragConstraints={constraintsRef}
        />
      </div>
    </>
  );
};
