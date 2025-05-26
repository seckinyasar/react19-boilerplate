"use client";
import { useEffect, useState } from "react";

interface TableOfContentsProps {
  list: { id: string; text: string }[];
}

const TableOfContents = ({ list }: TableOfContentsProps) => {
  const [activeIndex, setActiveIndex] = useState("");

  //? tracking active index
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-10% 0px -40% 0px",
      }
    );

    const headers = document.querySelectorAll("div[id]");
    headers.forEach((header) => observer.observe(header));

    return () => headers.forEach((header) => observer.unobserve(header));
  }, []);

  const onClickHandler = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      console.log(element);
      console.log(id);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // setActiveIndex(id);
    } else {
      alert("there is no element");
    }
  };

  return (
    <div className="fixed right-60 top-40">
      <div className="flex flex-col w-fit h-fit">
        <nav className="font-medium text-lg pb-4">On this page</nav>
        {list.map((item) => (
          <div
            key={item.id}
            onClick={() => onClickHandler(item.id)}
            className={`text-base pb-3 opacity-50 hover:cursor-pointer  ${
              activeIndex === item.id ? "opacity-100" : "opacity-50"
            }`}>
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TableOfContents;

//? lets test with no ids on maps. it shouldn't throw eslint error on react19.

//? div[id] => is a broad, capturing any div with an id. If i put same ids on any element, it won't work.

//? chrome => newTab =>  chrome://flags/ =>  Smooth Scrolling => default => enabled. This is why it wasn't working.
