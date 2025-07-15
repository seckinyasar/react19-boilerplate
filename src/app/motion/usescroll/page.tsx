"use client";
import ProgressBar from "@/components/ui/ProgressBar";
import { useMotionValueEvent, useScroll } from "motion/react";
const UseScrollExample = () => {
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll", latest);
  });

  return (
    <div className="flex w-full min-h-screen justify-center bg-background py-20 relative">
      <ProgressBar value={scrollYProgress} className="fixed top-0" />
      <div className="container-center flex-col gap-y-10 items-center min-h-screen h-full ">
        <h3 className="text-[38px] font-semibold tracking-[-1.5px] leading-[38px] pb-10">
          useScroll Hook Example
        </h3>
        <div className="container-center h-screen border border-border rounded-4xl  "></div>
        <div className="container-center h-screen border border-border rounded-4xl  "></div>
        <div className="container-center h-screen border border-border rounded-4xl  "></div>
      </div>
    </div>
  );
};
export default UseScrollExample;
