import { DragObject } from "./components/DragObject";
import { IntroTop } from "./components/IntroTop";
import { KeyframesAnimation } from "./components/KeyframesAnimation";
import { MotionValues } from "./components/MotionValues";
import { PopupCercle } from "./components/PopupCercle";

export default function Home() {
  return (
    <>
      <IntroTop />
      <PopupCercle />
      <KeyframesAnimation />
      <DragObject />
      <MotionValues />
    </>
  );
}
