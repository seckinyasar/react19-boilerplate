"use client";

//#region //? References
/**
 * @file ThemeSwitcher Component
 *
 * @section Colors & places they are used
 * - `border` => `outline` variant border (via Button)
 * - `background` => `outline` variant background (via Button)
 * - `ring` => focus state ring (via Button)
 * - `black` => `onlyIcon` variant background (`bg-black/40` in navbar mode)
 * - `active-svg` => icon stroke color (`stroke-active-svg`)
 *
 * @notes
 * - Hydration is handled via `useEffect` to prevent mismatches.
 * - Depends on `Button` component for styling (`outline` and `onlyIcon` variants).
 */
//#endregion

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface ThemeSwitcherProps {
  navbar?: boolean;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ navbar = false }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant={navbar ? "onlyIcon" : "outline"}
      size={navbar ? "navbar" : "default"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <Moon
          className={cn(
            "size-6 bg-transparent rounded-full stroke-active-svg p-0.5",
            navbar && "size-5"
          )}
        />
      ) : (
        <SunMedium
          className={cn(
            "size-6 bg-transparent rounded-full stroke-active-svg p-0.5",
            navbar && "size-5"
          )}
        />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
