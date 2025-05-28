"use client";
import { useMotionValueEvent, useScroll } from "motion/react";
import CircularProgressBar from "@/components/widgets/CircularProgressBar";
import { useRef } from "react";
import ProgressCircle from "@/components/widgets/CircularProgressBar";
const UseScrollExample = () => {
  const ref = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll", latest);
  });

  return (
    <div className="flex w-full min-h-screen justify-center bg-background py-20 relative">
      <div className="container-center flex-col gap-y-10 items-center min-h-screen h-full">
        <h3 className="text-[38px] font-semibold tracking-[-1.5px] leading-[38px] pb-10">
          Track element within viewport
        </h3>
      </div>
    </div>
  );
};
export default UseScrollExample;
