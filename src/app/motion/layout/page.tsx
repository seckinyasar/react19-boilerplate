"use client";
import { animate, motion, useMotionValue } from "motion/react";
import { useState } from "react";
const Layout = () => {
  const [active, setActive] = useState(1);
  const x = useMotionValue(0);

  const tabWidth = 120;

  const Indicator = () => {
    return (
      <motion.span
        style={{ x: x }}
        transition={{ type: "spring", duration: 2, bounce: 0.2 }}
        className="absolute left-0 bottom-0 h-1 w-[240px] bg-white rounded-b-md"
      ></motion.span>
    );
  };

  return (
    <div className="flex flex-col w-full h-screen items-center bg-background py-20">
      <h1 className="text-[38px] font-semibold tracking-[-1.5px] leading-[38px] pb-20">
        Layouts Example
      </h1>
      <motion.div className="flex items-center relative overflow-clip">
        <Indicator />
        <motion.div
          onClick={() => animate(x, 0, { type: "spring", duration: 1 })}
          className="w-[240px] py-8 rounded-md border border-border box-border"
        ></motion.div>
        <motion.div
          onClick={() => animate(x, 240, { type: "spring", duration: 1 })}
          className="w-[240px] py-8 rounded-md border border-border box-border"
        ></motion.div>
        <motion.div
          onClick={() => animate(x, 480, { type: "spring", duration: 1 })}
          className="w-[240px] py-8 rounded-md border border-border box-border"
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Layout;
