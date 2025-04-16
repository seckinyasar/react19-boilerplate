//#region //? References
/**
 * @file Button Component
 * @description A customizable button component built with Radix UI Slot and Class Variance Authority (CVA).
 *
 * @section Colors & places they are used.
 * - `primary` => `default` / `link` variant text
 * - `primary-foreground` => `default` variant text
 * - `secondary` => `secondary`
 * - `secondary-foreground` => `secondary` variant text
 * - `destructive` => `destructive` / `aria-invalid` border/ring
 * - `border` => `outline` variant border / `ghost` and `outline` hover background
 * - `ring` => focus state border and ring
 * - `accent-foreground` => `ghost` variant hover text
 * - `background` => `outline`
 *
 * @notes
 *
 */
//#endregion

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  cn(
    //! Base
    "rounded-md text-base font-medium outline-none",
    //! Functionality
    "inline-flex items-center justify-center whitespace-nowrap shrink-0 transition-all",
    //? SVG
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    //? Disabled
    "disabled:pointer-events-none disabled:opacity-50",
    //? Focus
    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    //? Hover
    "hover:opacity-70",

    //* Aria
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
  ),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-border bg-background shadow-xs hover:bg-border/20",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/40",
        ghost: "hover:bg-border/20 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        onlyIcon: "bg-transparent items-center justify-center",
      },
      size: {
        default: "h-9 px-4 has-[>svg]:px-3 ",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        navbar: "bg-black/40 rounded-full size-12 ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
