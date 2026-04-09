"use client";
import { motion } from "motion/react";

const Layout = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center bg-background py-20">
      <h1 className="text-[38px] font-semibold tracking-[-1.5px] leading-[38px] pb-20">
        Layout Animations with Hover
      </h1>

      {/* Grid Layout Example */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Grid Layout Animation
        </h2>
        <motion.div className="grid grid-cols-3 gap-4 max-w-4xl" layout>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              layout
              layoutId={`grid-item-${item}`}
              className="bg-card border border-border rounded-lg p-4 cursor-pointer"
              whileHover={{
                scale: 1.025,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                layout: { duration: 0.4 },
              }}
            >
              <motion.h4 layout="position" className="font-semibold mb-2">
                Grid Item {item}
              </motion.h4>
              <motion.p
                layout="position"
                className="text-sm text-muted-foreground"
              >
                This item animates smoothly when the layout changes
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Layout;
