import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="p-4 flex justify-between">
      <div className="text-3xl font-bold font-mono">
        <h1>Framer Motion Example</h1>
      </div>
      <nav>
        <ul className="flex gap-4 font-bold text-xl">
          <li className="hover:text-green-600 transition ease-in-out delay-150 duration-300 ">
            <Link href="/">Top</Link>
          </li>
          <li className="hover:text-green-600 transition ease-in-out delay-150 duration-300">
            <Link href="/scroll">Scroll Motion</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
