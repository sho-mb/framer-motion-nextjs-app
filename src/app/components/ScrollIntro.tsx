"use client";

import React from "react";

export const ScrollIntro = () => {
  return (
    <section className="p-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Scroll Animation</h1>
        <p className="font-bold">
          Scroll action demo page, It 3 components contain
        </p>

        <h2 className="text-2xl font-bold">Future</h2>
        <ul>
          <li>
            Component <strong> Progress bar </strong> It related with scroll
            progress Y
          </li>
          <li>
            Component <strong> ScrollAnimation </strong> It needs to be set
            Variants in item that you want to move{" "}
          </li>
          <li>
            As well as area also needs to be set <br />
            Initial and whileInView set from Variants <br />
            in <strong>viewport</strong> has value once if once false then can
            repeat animation
          </li>
        </ul>
      </div>
    </section>
  );
};
