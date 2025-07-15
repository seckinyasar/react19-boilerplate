import { MotionValue } from "motion/react";
import { useState } from "react";

type ProgressCircleProps = {
  size?: number;
  strokeWidth?: number;
  progress: number | MotionValue<number>; // 0-100 arası değer
};

const ProgressCircle = ({
  size = 100,
  strokeWidth = 8,
  progress,
}: ProgressCircleProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const [progressState, setProgress] = useState(0);

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
        fill="transparent"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#3b82f6"
        strokeWidth={strokeWidth}
        fill="transparent"
        strokeDasharray={circumference}
        strokeLinecap="round"
      />
    </svg>
  );
};
export default ProgressCircle;
