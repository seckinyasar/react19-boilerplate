"use client";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <Moon
          className={
            "size-6 bg-background rounded-full stroke-active-svg p-0.5"
          }
        />
      ) : (
        <SunMedium
          className={
            "size-6 bg-background rounded-full stroke-active-svg p-0.5"
          }
        />
      )}
    </Button>
  );
};

export default ThemeToggle;
