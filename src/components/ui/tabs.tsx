//#region //? References
/**
 * @file Tabs Component
 * @description A customizable tab navigation component built with Radix UI Tabs, supporting accessible tabbed interfaces.
 *
 * @section Colors & places they are used
 * - `muted` => `TabsList` background
 * - `muted-foreground` => `TabsList` text, `TabsTrigger` inactive text
 * - `background` => `TabsTrigger` active background
 * - `foreground` => `TabsTrigger` active text
 * - `ring` => focus state ring (`TabsTrigger`, `TabsContent`)
 * - `ring-offset` => focus state ring offset (`TabsTrigger`, `TabsContent`)
 */
//#endregion
"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      //! Base
      "h-10 w-full rounded-md bg-transparent p-1",
      //? Functionality
      "inline-flex items-center justify-center text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      //! Base
      "rounded-md h-10 text-base font-medium min-w-[200px] bg-black/40 ",
      //? Functionality
      "inline-flex items-center justify-center whitespace-nowrap transition-all",
      //? Focus
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      //? Disabled
      "disabled:pointer-events-none disabled:opacity-50",
      //? Active State
      "data-[state=active]:bg-[#25282F] data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      //! Base
      "mt-2",
      //? Focus
      "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
