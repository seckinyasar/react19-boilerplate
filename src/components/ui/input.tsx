//#region  //? References
/**
 * @file Input Component for all Text | Email | Password
 *
 * @section Colors & places they are used.
 * - `border-input` => base border
 * - `muted-foreground` => placeholder text
 * - `primary` => selection background
 * - `primary-foreground` => selection text
 * - `foreground` => file input text
 * - `ring` => focus state border and ring
 * - `destructive` => `aria-invalid` border/ring
 *
 * @override => width => default full.
 * @override => Placeholder => default is defined on @see defaultPlaceholders
 *
 *
 * @params => type , width , placeholder
 *
 */
//#endregion

"use client";
import { cn } from "@/lib/utils";
import { Eye, EyeClosed } from "lucide-react";
import * as React from "react";
import { Button } from "./Button";

function Input({
  className,
  type,
  placeholder,
  ...props
}: React.ComponentProps<"input">) {
  const defaultPlaceholders: Record<string, string> = {
    text: "Enter text",
    email: "Email Address",
    password: "Password",
    file: "Click to choose a file",
  };
  const resolvedPlaceholder =
    placeholder ?? defaultPlaceholders[type || "text"] ?? "";

  const [show, setShow] = React.useState<boolean>(false);
  const effectiveType =
    type === "password" ? (show ? "text" : "password") : type;

  return (
    <div className="relative w-full group">
      <input
        type={effectiveType}
        data-slot="input"
        placeholder={resolvedPlaceholder}
        className={cn(
          //! Base
          "flex h-10 w-full min-w-0 rounded-md border border-border bg-transparent px-2 text-base outline-none  ",
          //? Placeholder
          "placeholder:color-text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          //? Selection => ctrl a
          "selection:bg-primary selection:text-primary-foreground transition-[color,box-shadow]",
          //? File
          "file:h-10 file:border-0 file:bg-transparent file:text-sm file:font-medium file:inline-flex file:text-foreground ",
          //? Focus
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]",
          //? Focus-Within
          "group-focus-within:placeholder:text-foreground",
          //? Aria
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          //? Autofill
          "[&:-webkit-autofill]:bg-gray-100 [&:-webkit-autofill]:text-gray-900",
          className
        )}
        {...props}
      />
      {type === "password" && (
        <Button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-1 top-1/2 -translate-y-1/2"
          size="icon"
          variant="onlyIcon"
        >
          {!show ? (
            <Eye className="size-5 stroke-muted-foreground group-focus-within:stroke-foreground " />
          ) : (
            <EyeClosed className="size-5 stroke-muted-foreground group-focus-within:stroke-foreground" />
          )}
        </Button>
      )}
    </div>
  );
}

export { Input };

//TODO Flutter, Devin like inputs can be made, but first lets check motiondev.
