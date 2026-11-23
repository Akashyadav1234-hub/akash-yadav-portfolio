"use client";

import { useMounted, useIsDark } from "@/hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const mounted = useMounted();
  const isDark = useIsDark();

  const toggleTheme = () => {
    const nextDark = !isDark;
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-full border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-sky-400 hover:text-sky-500 hover:scale-105 active:scale-95 dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-300 dark:hover:border-sky-400 dark:hover:text-sky-400"
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
