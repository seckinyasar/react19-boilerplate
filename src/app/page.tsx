"use client";

import { buttonVariants } from "@/components/ui/Button";
import Link from "next/link";
import HomeMenu from "./constants/menu-home";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center bg-background text-foreground py-20">
      {/* //? Container_Inner  */}
      <div className="flex flex-col gap-y-2 w-fit">
        {HomeMenu.map((menu, index) => (
          <section
            key={index}
            className={`flex flex-col border border-border gap-y-6 py-5 px-10 first-of-type:rounded-t-4xl last-of-type:rounded-b-4xl`}
          >
            <h2 className="text-lg flex items-center">
              {menu.title}
              {menu.icon}
            </h2>
            <div className="flex flex-col gap-y-4">
              {menu.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={buttonVariants({
                    variant: "outline",
                    className: "justify-start w-fit",
                  })}
                >
                  {link.label}
                  {link.icon}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
