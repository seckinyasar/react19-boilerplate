"use client";

import { buttonVariants } from "@/components/ui/Button";
import { Component, Cuboid, FilePenLine, Library } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center bg-background text-foreground py-20">
      {/* //* container_Inner */}
      <div className="flex flex-col gap-y-2 w-fit">
        <div className="flex flex-col p-10 border border-border space-y-6 rounded-t-4xl rounded-b-sm">
          <h2 className="text-lg  ">Components</h2>
          <div className="space-x-10">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/elements"
            >
              Elements
              <Component className="size-3.5 ml-2" />
            </Link>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/forms"
            >
              Login / Register Form
              <FilePenLine className="size-3.5 ml-2" />
            </Link>
          </div>
        </div>

        {/*//* UI Builder */}
        <div className="flex flex-col gap-y-6 border border-border p-10 rounded-sm">
          <h2 className="text-lg">UI Builder</h2>
          <div className="space-x-10">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/reactflow"
            >
              Reactflow
              <FilePenLine className="size-3.5 ml-2" />
            </Link>
          </div>
        </div>

        {/* //* Framer Motion  */}
        <div className="flex flex-col gap-y-5 border border-border p-10 rounded-sm">
          <h2 className="flex items-center text-lg]}">
            Motion Dev
            <Library className="size-3.5 ml-2" />
          </h2>
          <div>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/motion/scrollwithtoc"
            >
              Scroll Animation with Table of Contents
              <Cuboid className="size-3.5 ml-2" />
            </Link>
          </div>
          <div>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/motion/trackelementwithinviewport"
            >
              Track Element Within Viewport
              <Cuboid className="size-3.5 ml-2" />
            </Link>
          </div>
          <div>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/motion/usetransform"
            >
              UseTransform Example
              <Cuboid className="size-3.5 ml-2" />
            </Link>
          </div>
          <div>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/motion/layout"
            >
              Sliding Underline - Layout
              <Cuboid className="size-3.5 ml-2" />
            </Link>
          </div>
          <div>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/motion/layoutexamples"
            >
              Layout Examples
              <Cuboid className="size-3.5 ml-2" />
            </Link>
          </div>
          <div>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/motion/flexgrowsample"
            >
              Flex Grow Sample
              <Cuboid className="size-3.5 ml-2" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 border border-border p-10 rounded-sm">
          <h2 className="text-lg flex items-center ">
            Motion Hooks
            <Library className="size-3.5 ml-2" />
          </h2>
          <div>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/motion/usescroll"
            >
              Motion Hook =&gt; useScroll
              <Cuboid className="size-3.5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
