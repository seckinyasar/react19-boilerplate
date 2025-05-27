"use client";
import TableOfContents from "@/components/widgets/TableOfContents";
import { motion } from "motion/react";
export default function Page() {
  const contents = [
    { text: "Scroll Animation", id: "Article 1" },
    { text: "First Example ", id: "Article 2" },
    { text: "With InView prop", id: "Article 3" },
    { text: "And testing table of contents", id: "Article 4" },
    { text: "With intersection observer api", id: "Article 5" },
  ];

  return (
    <div className="flex w-full min-h-screen justify-center bg-background text-foreground py-20 relative">
      <TableOfContents list={contents} />
      <div className="container-center flex-col items-center min-h-screen h-full">
        <div className="text-3xl pb-10">Scroll Animation</div>
        {contents.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            key={index}
            id={item.id}
            className="flex w-full max-w-1/3 items-center justify-center bg-gray-400 h-[600px] border border-border rounded-4xl text-black mb-4">
            {item.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
