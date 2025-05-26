//#region  //? References
/**
 * @file Textarea Component
 *
 * @section Colors & places they are used
 * - `border-input` => base border
 * - `muted-foreground` => placeholder text
 * - `ring` => focus state border and ring
 * - `destructive` => `aria-invalid` border/ring
 *
 * @override => width => default full
 * Use wrapper to control size.
 *
 *
 */
//#endregion

import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        //! Base
        "flex min-h-16 max-h-32 w-full rounded-sm border border-input bg-transparent px-3 py-2 text-base outline-none transition-[color,box-shadow]",
        //? Placeholder
        "placeholder:text-muted-foreground",
        //? Focus
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[2px]",
        //? Disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
        //? Functionality
        "shrink-0 grow-0",
        //? Responsive
        "",
        //? Field Sizing
        "field-sizing-content",
        //* Aria
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
