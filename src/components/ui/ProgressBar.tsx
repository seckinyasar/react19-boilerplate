import { cn } from "@/lib/utils";
import { MotionValue, motion } from "motion/react";
import { useEffect } from "react";

interface ProgressBarProps {
  value: number | MotionValue<any>; // 0 - 100
  className?: string | undefined;
}

const ProgressBar = ({ value, className }: ProgressBarProps) => {
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <motion.div
      className={cn("w-full h-1 rounded-full overflow-hidden", className)}
    >
      <motion.div
        className="flex w-full h-full bg-blue-500"
        style={{ scaleX: value, transformOrigin: "left" }}
      />
    </motion.div>
  );
};
export default ProgressBar;

//? used motion.div to use value as it is, without any manipulation. Otherwise, it is not working.
