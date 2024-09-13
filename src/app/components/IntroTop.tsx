"use client";
import React from "react";

export const IntroTop = () => {
  return (
    <section className="p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Introduction</h1>
        <p className="font-bold">
          This is demo app of Framer Motion Animation Lib in NextJs
        </p>

        <h2 className="text-2xl font-bold">Future</h2>
        <ul>
          <li>
            Using <strong> {"<motion />"} </strong> componet to setup animation
            frame
          </li>
          <li>
            Specify tags name inject to <strong> {"<motion.div>"} </strong>{" "}
          </li>
          <li>
            Add animiation detail in motion tag{" "}
            <strong>{"<motion.div animate={{ x: 100 }} />"} </strong> and It
            works!
          </li>
        </ul>
      </div>
    </section>
  );
};
