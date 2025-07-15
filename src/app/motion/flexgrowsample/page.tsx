"use client";
import MetaLogo from "@/components/icons/metalogo";
import { motion } from "motion/react";
import { useState } from "react";
const Page = () => {
  const [hovered, setHovered] = useState<number>(2);

  return (
    <div className="flex w-full min-h-screen justify-center bg-background text-foreground py-20">
      <section className="flex w-full min-h-full gap-5 px-20">
        {[0, 1, 2].map((index) => (
          <motion.div
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            key={index}
            layoutId={index.toString()}
            onMouseEnter={() => setHovered(index)}
            className={`flex h-full border border-border rounded-[8px]  ${
              hovered === index ? "grow-8" : "grow-2"
            }`}
          >
            {hovered === index ? (
              <div className="flex h-full w-full items-center justify-center">
                Place the contents here
              </div>
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <MetaLogo />
              </div>
            )}
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Page;
