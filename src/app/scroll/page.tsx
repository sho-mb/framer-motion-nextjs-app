import React from "react";
import ScrollAnimation from "../components/ScrollAnimation";
import { ScrollAnimationB } from "../components/ScrollAnimationB";
import LinkedScroll from "../components/LinkedScroll";
import { ScrollIntro } from "../components/ScrollIntro";

export default function Home() {
  return (
    <>
      <ScrollIntro />
      <LinkedScroll />
      <ScrollAnimation />
      <ScrollAnimationB />
    </>
  );
}
