//#region //? References
/**
 * @file Checkbox Component
 *
 * @section Colors & places they are used
 * - `input` => base border / dark mode background
 * - `primary` => checked state background / border
 * - `primary-foreground` => checked state text
 * - `ring` => focus state border and ring
 * - `destructive` => `aria-invalid` border/ring
 *
 * @notes
 *
 * @params text => required
 * @params disabled
 *
 */
//#endregion

"use client";
import { cn } from "@/lib/utils";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import * as React from "react";

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        //! Base
        "size-4 rounded-[4px] border border-input outline-none",
        //? Functionality
        "peer flex shrink-0 transition-shadow",
        //? Checked State
        "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary",
        //? Focus
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        //? Disabled
        "disabled:cursor-not-allowed disabled:opacity-50",
        //? Aria
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}>
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className={cn(
          //! Base
          "flex items-center justify-center",
          //? Functionality
          "text-current transition-none",
          //? SVG (for CheckIcon)
          "size-full"
        )}>
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

interface CheckboxWithTextInterface {
  text: string;
  disabled?: boolean;
}
function CheckboxWithText({
  text,
  disabled = false,
}: CheckboxWithTextInterface) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" disabled={disabled} />
      <label
        htmlFor="terms"
        className={cn(
          "text-base",
          disabled && "opacity-50 cursor-not-allowed"
        )}>
        {text}
      </label>
    </div>
  );
}

export { Checkbox, CheckboxWithText };
