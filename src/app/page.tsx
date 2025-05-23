"use client";

import { buttonVariants } from "@/components/ui/button";
import { Component, FilePenLine } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center bg-background text-foreground pb-20">
      {/* //* container_Inner */}
      <div className="flex flex-col gap-y-2 mt-20 w-fit">
        <div className="flex flex-col p-10 border border-border space-y-6 rounded-t-4xl rounded-b-sm">
          <h2 className="text-base ">Components</h2>
          <div className="space-x-10">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/elements">
              Elements
              <Component className="size-3.5 ml-2" />
            </Link>
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/forms">
              Login / Register Form
              <FilePenLine className="size-3.5 ml-2" />
            </Link>
          </div>
        </div>

        {/*//* UI Builder */}
        <div className="flex flex-col gap-y-6 border border-border p-10 rounded-sm">
          <h2 className="text-base">UI Builder</h2>
          <div className="space-x-10">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/reactflow">
              Reactflow
              <FilePenLine className="size-3.5 ml-2" />
            </Link>
          </div>
        </div>

        {/* //* Framer Motion  */}
        <div className="flex flex-col "></div>
      </div>
    </div>
  );
}
