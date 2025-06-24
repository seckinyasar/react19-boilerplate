"use client";

import {
  AnimatePresence,
  motion,
  MotionConfig,
  Transition,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

import {
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleUser,
  MessageCircle,
  MessageCircleCodeIcon,
  MessageCircleHeart,
  MessageCircleIcon,
  MessageSquare,
  PaperclipIcon,
  User,
  User2,
} from "lucide-react";

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
  const [showPeople, setShowPeople] = useState(false);

  useMotionValueEvent(firstDivProgress, "change", () => {
    setCrossed(firstDivProgress.get() >= 1);
    console.log(firstDivProgress);
  });

  const TRANSITION: Transition = {
    duration: 0.5,
    type: "spring",
    bounce: 0.05,
    ease: "easeInOut",
  };

  return (
    <div
      ref={mainDivRef}
      className="flex flex-col w-full h-[400vh] bg-background items-center relative"
    >
      <div
        className="flex flex-col w-full h-[100vh] items-center"
        ref={firstDiv}
      >
        <h2 className="text-[38px] font-semibold tracking-[-1.5px] leading-[38px] pt-20">
          Test
        </h2>
        {!crossed && (
          <motion.div
            key="message-box"
            layoutId="message"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 200 }}
            exit={{ opacity: 0, y: +50, x: +50 }}
            className="w-[400px] h-[200px] border border-gray-600 rounded-4xl flex flex-col items-center p-10"
          >
            <div className="text-center m-auto">
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

      <div
        ref={secondDiv}
        className="flex w-full items-center justify-center h-[100vh] "
      >
        <MotionConfig transition={TRANSITION}>
          {menuOpen ? (
            <motion.div
              layoutId="buttonToOpenForm"
              key="mainDiv"
              className="w-[320px] bg-black origin-top-left border border-border"
              style={{
                borderRadius: "32px",
              }}
            >
              <section className="flex flex-col gap-y-6 px-6 py-6">
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
                  className="flex items-center justify-center bg-accent hover:bg-accent/50 text-black  w-full h-10 text-base border border-border rounded-lg"
                >
                  Submit
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              layoutId="buttonToOpenForm"
              key="buttonToOpenForm"
              onClick={() => setMenuOpen(true)}
              className="size-16 bg-black flex items-center justify-center group"
              style={{
                borderRadius: "32px",
              }}
            >
              <PaperclipIcon className="size-8 stroke-1 group-hover:stroke-sky-400" />
            </motion.div>
          )}
        </MotionConfig>
      </div>

      <div className="flex w-full h-[100vh] justify-center items-center text-gray-400">
        <div className="flex max-w-md w-full h-[400px]">
          <div className="flex flex-col flex-1">
            <button
              onClick={() => {
                setShowPeople(!showPeople);
              }}
              className="flex w-full h-10 items-center px-3 rounded-md  justify-between hover:bg-[rgba(37,37,37,0.2)] "
            >
              <div className="flex text-[15px] space-x-2 items-center">
                <User className="size-5" />
                <div>People</div>
                <div className="size-4 rounded-full bg-gray-600 text-xs items-center flex justify-center">
                  25
                </div>
              </div>
              <div className="flex items-center gap-1">
                {showPeople ? "Hide" : "Show"}
                {showPeople ? (
                  <ChevronUp className="size-4" />
                ) : (
                  <ChevronDown className="size-4" />
                )}
              </div>
            </button>
            {/* //! Animation Part */}
            <div className="flex flex-col flex-1 p-6 gap-y-3">
              <section className="flex w-full h-10 px-2.5 rounded-md border border-border justify-between items-center z-50 bg-background">
                <div className="flex text-[15px] gap-x-2 items-center">
                  <CircleUser className="size-5" />
                  John Doe
                </div>
                <MessageSquare className="size-5" />
              </section>{" "}
              <motion.section
                initial={{ y: -40 }}
                animate={
                  showPeople ? { y: 0, scaleX: 1 } : { y: -40, scaleX: 0.9 }
                }
                className="flex w-full h-10 px-2.5 rounded-md border border-border justify-between items-center bg-background z-30"
              >
                <div className="flex text-[15px] gap-x-2 items-center">
                  <CircleUser className="size-5" />
                  John Doe
                </div>
                <MessageSquare className="size-5" />
              </motion.section>{" "}
              <motion.section
                initial={{ y: -40 }}
                animate={
                  showPeople ? { y: 0, scaleX: 1 } : { y: -80, scaleX: 0.8 }
                }
                className="flex w-full h-10 px-2.5 rounded-md border border-border justify-between items-center"
              >
                <div className="flex text-[15px] gap-x-2 items-center">
                  <CircleUser className="size-5" />
                  John Doe
                </div>
                <MessageSquare className="size-5" />
              </motion.section>
            </div>
          </div>
        </div>
      </div>

      <main className="flex w-full h-[100vh] justify-center items-center"></main>
    </div>
  );
};

export default Test;
