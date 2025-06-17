"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useRef, useState } from "react";

import { MessageCircleIcon, PaperclipIcon } from "lucide-react";
import { boolean } from "zod";

const Test = () => {
  const mainDivRef = useRef(null);
  const firstDiv = useRef(null);
  const secondDiv = useRef(null);

  const { scrollYProgress: firstDivProgress } = useScroll({
    target: firstDiv,
    offset: ["0", "0.1"], // Top of target (0) aligns with middle of container (0.5)
  });
  const { scrollYProgress: secondDivProgress } = useScroll({
    target: secondDiv,
  });
  const [crossed, setCrossed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(firstDivProgress, "change", () => {
    setCrossed(firstDivProgress.get() >= 1);
    console.log(firstDivProgress);
  });

  const [clicked, setClicked] = useState(false);
  return (
    <div
      ref={mainDivRef}
      className="flex flex-col w-full h-[300vh] bg-background items-center py-20 relative"
    >
      <h2 className="text-[38px] font-semibold tracking-[-1.5px] leading-[38px] pb-20">
        Test
      </h2>
      <div
        ref={firstDiv}
        className="flex w-full h-[100vh] items-center justify-center"
      >
        {!crossed && (
          <motion.div
            key="message-box"
            layoutId="message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: +50, x: +50 }}
            className="w-[400px] h-[200px] border border-gray-600 rounded-e-lg flex flex-col items-center p-4"
          >
            <h3 className="text-xl">Hi</h3>
            <div className="text-center pt-4">
              Bu öge scrollProgress kendi y degerini gectiginde sağ alta
              animasyonlu bir şekilde gidiyor olmalı.
            </div>
          </motion.div>
        )}

        {crossed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, easings: "easeIn" }}
            layoutId="message"
            className="fixed bottom-10 right-10"
          >
            <div className="size-14 rounded-full flex items-center justify-center bg-gray-800 shadow-lg">
              <MessageCircleIcon className="size-7 text-white" />
            </div>
          </motion.div>
        )}
      </div>

      <div ref={secondDiv} className="flex w-full h-[100vh] bg-gray-600">
        <AnimatePresence>
          {menuOpen ? (
            <motion.div
              key="mainDiv"
              className="w-[320px] h-fit border border-border rounded-xl flex flex-col gap-y-6 px-6 py-6"
            >
              <span>Welcome, please enter your credentials.</span>
              <div className="flex items-center pl-2 w-full h-10 text-base border border-border rounded-lg ">
                Name
              </div>
              <div className="flex items-center pl-2 w-full h-10 text-base border border-border rounded-lg ">
                Surname
              </div>
              <div className="flex items-center pl-2 w-full h-10 text-base border border-border rounded-lg ">
                Email Address
              </div>
              <div
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center bg-gray-600 hover:bg-gray-400  w-full h-10 text-base border border-border rounded-lg "
              >
                Submit
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="buttonToOpenForm"
              onClick={() => setMenuOpen(true)}
              className="size-16 bg-gray-600 hover:bg-gray-400 rounded-full flex items-center justify-center group"
            >
              <PaperclipIcon className="size-8 stroke-1 group-hover:stroke-sky-400" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Test;
