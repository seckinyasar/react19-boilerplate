import ThemeToggle from "@/components/dayNightToggle";

export default function Home() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-background text-foreground">
      Hello
      <ThemeToggle />
    </div>
  );
}
