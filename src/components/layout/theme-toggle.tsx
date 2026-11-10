"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    // Check local storage preference
    const saved = localStorage.getItem("the_value_shift_theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("the_value_shift_theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("the_value_shift_theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 sm:px-2.5 sm:py-1.5 rounded-lg border border-border-subtle bg-deep-surface text-muted-gray hover:text-off-white hover:bg-surface-elevated transition-all duration-200 cursor-pointer flex items-center gap-1.5 text-xs font-mono select-none"
      title={isDark ? "Đổi sang giao diện Sáng (Nordic Sage)" : "Đổi sang giao diện Tối (Midnight Navy)"}
      aria-label="Toggle light or dark theme"
    >
      {isDark ? (
        <>
          <Sun className="w-3.5 h-3.5 text-warm-gold" />
          <span className="hidden sm:inline">Light</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-electric-blue" />
          <span className="hidden sm:inline">Dark</span>
        </>
      )}
    </button>
  );
}

