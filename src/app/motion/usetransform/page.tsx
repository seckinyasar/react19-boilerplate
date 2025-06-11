"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
const UseTransform = () => {
  const mainDiv = useRef(null);
  const { scrollY } = useScroll();
  const motionValueScroll = scrollY;
  const xRange = [-200, -100, 100, 200];
  const opacityRange = ["#ccc", "#000", "#000", "#fff"];
  const y = useTransform(motionValueScroll, xRange, opacityRange);

  return (
    <motion.div
      ref={mainDiv}
      className="flex flex-col w-full h-[2000px] items-center bg-background py-20 relative object-cover "
    >
      <h3 className="text-[38px] font-semibold tracking-[-1.5px] leading-[38px] pb-10">
        useTransform Usage
      </h3>

      <motion.div
        className="size-40 rounded-full bg-red-200"
        drag
        dragConstraints={{}}
        style={{ backgroundColor: y }}
      ></motion.div>
    </motion.div>
  );
};

export default UseTransform;
