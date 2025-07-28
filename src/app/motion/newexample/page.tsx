"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const NewExample = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <motion.div className="flex gap-x-4">
        {Array.from({ length: 3 }).map((item, i) => (
          <motion.div
            className={cn(
              "w-[200px] h-[200px] bg-red-500 rounded-lg",
              i === 0 && "bg-blue-500",
              i === 1 && "bg-green-500",
              i === 2 && "bg-red-500"
            )}
            key={i}
            whileHover={{ width: "400px" }}
          ></motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default NewExample;
