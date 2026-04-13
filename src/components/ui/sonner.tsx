//#region //? References
/**
 * @file Toaster Component
 *
 * @section Colors & places they are used
 * - `popover` => toast background (`--normal-bg`)
 * - `popover-foreground`   => toast text (`--normal-text`)
 * - `border` => toast border (`--normal-border`)
 *
 * @notes
 * - Theme is dynamically applied using `next-themes` (`system`, `light`, `dark`).
 */
//#endregion

"use client";
import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme } = useTheme();
  const resolvedTheme: NonNullable<ToasterProps["theme"]> =
    theme === "light" || theme === "dark" ? theme : "system";

  return (
    <Sonner
      theme={resolvedTheme}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
