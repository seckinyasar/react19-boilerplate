"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef } from "react";
const UseScrollExample = () => {
  const refFirstDiv = useRef(null);
  const refSecondDiv = useRef(null);
  const refMain = useRef(null);
  const { scrollYProgress: firstDivProgress } = useScroll({
    target: refFirstDiv,
  });
  const { scrollYProgress: secondDivProgress } = useScroll({
    target: refSecondDiv,
  });
  const { scrollYProgress: refMainProgress } = useScroll({
    target: refMain,
  });
  useMotionValueEvent(firstDivProgress, "change", (latest) => {
    console.log("page scroll: ", latest);
  });
  useMotionValueEvent(secondDivProgress, "change", (latest) => {
    console.log("page scroll second : ", latest);
  });
  useMotionValueEvent(refMainProgress, "change", (latest) => {
    console.log("main scroll : ", latest);
  });

  return (
    <motion.div
      ref={refMain}
      className="flex flex-col w-full min-h-screen items-center bg-background py-20 relative object-cover "
    >
      <h3 className="text-[38px] font-semibold tracking-[-1.5px] leading-[38px] pb-10">
        Track element within viewport
      </h3>
      <motion.div
        className="relative container-center flex-col gap-y-10 items-center h-[2000px] bg-purple-200 rounded-4xl mb-10 "
        ref={refFirstDiv}
        style={{ scale: firstDivProgress }}
      ></motion.div>
      <motion.div
        ref={refSecondDiv}
        style={{ scale: secondDivProgress }}
        className="container-center items-center h-screen bg-white rounded-4xl"
      ></motion.div>
    </motion.div>
  );
};
export default UseScrollExample;
