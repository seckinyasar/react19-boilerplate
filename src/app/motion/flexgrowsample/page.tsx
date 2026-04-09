"use client";
import MetaLogo from "@/components/icons/metalogo";
import { motion } from "motion/react";
import { useState } from "react";
const Page = () => {
  const [hovered, setHovered] = useState<number>(0);

  return (
    <div className="flex w-full min-h-screen justify-center bg-background text-foreground py-20 ">
      <section className="flex w-full min-h-full gap-5 px-40 py-16">
        {[0, 1, 2].map((index) => (
          <motion.div
            transition={{
              duration: 0.1,
              //TODO lets use custom ease.
              ease: "easeInOut",
            }}
            key={index}
            layoutId={index.toString()}
            onMouseEnter={() => setHovered(index)}
            className={`flex h-full border border-border rounded-[8px]`}
            initial={{ width: "10%" }}
            animate={{ width: hovered === index ? "80%" : "10%" }}
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
