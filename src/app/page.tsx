"use client";

import { Button } from "@/components/ui";
import { buttonVariants } from "@/components/ui/button";
import { Component } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center bg-background text-foreground pb-20">
      <div className="flex flex-col items-center mt-20 min-w-[400px]">
        <div className="flex flex-col space-y-6 border border-border p-10 rounded-lg ">
          <h2 className="text-base ">Components</h2>
          <div className="space-x-10">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/elements">
              Elements
              <Component className="size-3.5 ml-2" />
            </Link>
            <Button variant="outline">Forms</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
