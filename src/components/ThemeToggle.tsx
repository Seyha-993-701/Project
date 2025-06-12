
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <Button variant="ghost" size="icon" className="w-9 h-9 opacity-0"></Button>;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="w-9 h-9"
      aria-label={theme === 'light' ? "ប្ដូរទៅ​មុខងារងងឹត" : "ប្ដូរទៅ​មុខងារភ្លឺ"}
    >
      {theme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 transition-all dark:rotate-90" />
      )}
    </Button>
  );
};
