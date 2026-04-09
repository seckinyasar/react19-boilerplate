"use client";
import { motion, useMotionValue, AnimatePresence } from "motion/react";
import { useState } from "react";

const Layout = () => {
  const [active, setActive] = useState(1);
  const [hovered, setHovered] = useState<number | null>(null);
  const x = useMotionValue(0);

  const tabWidth = 120;

  const Indicator = () => {
    return (
      <motion.span
        layoutId="underlineEffect"
        className="absolute left-0 bottom-0 h-1 w-[240px] bg-white rounded-b-md"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      ></motion.span>
    );
  };

  const Card = ({
    id,
    title,
    content,
  }: {
    id: number;
    title: string;
    content: string;
  }) => {
    return (
      <motion.div
        layout
        layoutId={`card-${id}`}
        onClick={() => setActive(id)}
        onHoverStart={() => setHovered(id)}
        onHoverEnd={() => setHovered(null)}
        className={`relative cursor-pointer transition-colors duration-200 ${
          active === id
            ? "bg-primary/10 border-primary"
            : "bg-background border-border"
        } ${hovered === id ? "border-primary/50" : ""}`}
        style={{
          width: hovered === id ? 280 : 240,
          height: hovered === id ? 120 : 100,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          layout: { duration: 0.3 },
        }}
      >
        <div className="p-6 h-full flex flex-col justify-center">
          <motion.h3 layout="position" className="text-lg font-semibold mb-2">
            {title}
          </motion.h3>
          <motion.p layout="position" className="text-sm text-muted-foreground">
            {content}
          </motion.p>
        </div>
        {active === id && <Indicator />}
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col w-full h-screen items-center bg-background py-20">
      <h1 className="text-[38px] font-semibold tracking-[-1.5px] leading-[38px] pb-20">
        Layout Animations with Hover
      </h1>

      {/* Tab Navigation */}
      <motion.div className="flex items-center relative mb-8">
        <motion.div
          onClick={() => setActive(1)}
          className="w-[240px] py-8 rounded-md border border-border box-border relative cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {active === 1 && <Indicator />}
          <div className="text-center">Tab 1</div>
        </motion.div>
        <motion.div
          onClick={() => setActive(2)}
          className="w-[240px] py-8 rounded-md border border-border box-border relative cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {active === 2 && <Indicator />}
          <div className="text-center">Tab 2</div>
        </motion.div>
        <motion.div
          onClick={() => setActive(3)}
          className="w-[240px] py-8 rounded-md border border-border box-border relative cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {active === 3 && <Indicator />}
          <div className="text-center">Tab 3</div>
        </motion.div>
      </motion.div>

      {/* Content Cards with Layout Animation */}
      <div className="flex gap-4">
        <Card
          id={1}
          title="Card 1"
          content="This card expands on hover and uses layout animations"
        />
        <Card
          id={2}
          title="Card 2"
          content="Hover to see the smooth size transition"
        />
        <Card
          id={3}
          title="Card 3"
          content="Layout animations make this feel natural"
        />
      </div>

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
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                layout: { duration: 0.3 },
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
