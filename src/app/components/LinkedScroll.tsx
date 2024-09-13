"use client";

import "../css/linkedScroll.css";
import { motion, useScroll, useSpring } from "framer-motion";

export default function LinkedScroll() {
  const { scrollYProgress } = useScroll(); //scrollのトリガーをY軸の移動に対応
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, //20pxずつ
    damping: 30, //30px溜まるたびに移動
    restDelta: 0.001,
  });

  // useScrollで取得したYをuseSpringで動きを設定して、styleに反映させる。
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </>
  );
}
