//#region //? References
/**
 * @file Accordion Component
 *
 * @section Colors &  places they are used
 * - `border` => `AccordionItem` base border
 * - `muted-foreground` => `AccordionTrigger` ChevronDownIcon
 * - `ring` => `AccordionTrigger` focus state border and ring
 *
 * @notes
 * - Animations (`animate-accordion-up`, `animate-accordion-down`) are used in `AccordionContent` for open/close transitions.
 *
 * @override
 * - Please use max-width on the parent component to prevent layout shift.
 *
 *
 */
//#endregion

"use client";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        //! Base
        "border-b border-border",
        //? Last Child
        "last:border-b-0",
        className
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          //! Base
          "flex flex-1 rounded-md text-lg font-medium outline-none",
          //? Functionality
          "items-start justify-between gap-4 py-4 text-left transition-all",
          //? Interaction
          "hover:underline underline-offset-[3px]",
          //? Focus
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          //? Disabled
          "disabled:pointer-events-none disabled:opacity-50",
          //? SVG (for ChevronDownIcon)
          "[&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}>
        {children}
        <ChevronDownIcon
          className={cn(
            //! Base
            "size-4 shrink-0 translate-y-0.5",
            //? Functionality
            "transition-transform duration-200",
            //? SVG
            "pointer-events-none",
            //? Colors
            "text-muted-foreground"
          )}
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        //! Base
        "overflow-hidden text-base font-normal",
        //? Animation
        "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}>
      <div
        className={cn(
          //! Base
          "pt-0 pb-4",
          className
        )}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
