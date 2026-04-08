import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setIsDark(!isDark)}
      className="rounded-full w-10 h-10 bg-background/50 backdrop-blur-md border border-border/50 hover:bg-accent transition-all"
    >
      {isDark ? <Sun className="h-5 w-5 text-tsushima-gold" /> : <Moon className="h-5 w-5 text-tsushima-red" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
