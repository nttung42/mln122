"use client";

import * as React from "react";
import Link from "next/link";
import { Compass, Gamepad2, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "hero", label: "Mở đầu" },
  { id: "paradox", label: "01. Nghịch lý" },
  { id: "product-journey", label: "02. Chuỗi sản phẩm" },
  { id: "decode-value", label: "03. Giải mã Giá trị" },
  { id: "global-shift", label: "04. Dịch chuyển Toàn cầu" },
  { id: "vietnam-position", label: "05. Vị thế Việt Nam" },
  { id: "challenge", label: "06. Thử thách 2040" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection detection
      const scrollPosition = window.scrollY + 200;
      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-midnight-navy/90 backdrop-blur-md border-b border-border-subtle py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 group text-left cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-electric-blue/20 border border-electric-blue/50 flex items-center justify-center text-electric-blue font-heading font-black group-hover:scale-105 transition-transform">
            VS
          </div>
          <div>
            <span className="font-heading font-black text-sm sm:text-base tracking-wider text-off-white block">
              THE VALUE SHIFT
            </span>
            <span className="text-[10px] font-mono text-muted-gray tracking-tight block -mt-1">
              Kinh tế Chính trị Mác – Lênin
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {SECTIONS.map((sec) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer",
                activeSection === sec.id
                  ? "bg-electric-blue/20 text-electric-blue border border-electric-blue/40 shadow-sm font-semibold"
                  : "text-muted-gray hover:text-off-white hover:bg-surface-elevated/40"
              )}
            >
              {sec.label}
            </button>
          ))}
        </nav>

        {/* Right side CTA & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <div className="hidden sm:block">
            <Button
              size="sm"
              variant="gold"
              onClick={() => scrollToSection("challenge")}
              className="text-xs gap-1.5"
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Vào Thử thách 2040</span>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-muted-gray hover:text-off-white hover:bg-surface-elevated"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-deep-surface/98 backdrop-blur-xl border-b border-border-subtle px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-2xl">
          <div className="flex flex-col space-y-1.5">
            {SECTIONS.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={cn(
                  "flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-left",
                  activeSection === sec.id
                    ? "bg-electric-blue/20 text-electric-blue font-semibold"
                    : "text-muted-gray hover:text-off-white hover:bg-surface-elevated/50"
                )}
              >
                <span>{sec.label}</span>
                {activeSection === sec.id && <ArrowRight className="w-4 h-4" />}
              </button>
            ))}

            <div className="pt-3 border-t border-border-subtle mt-2">
              <Button
                variant="gold"
                className="w-full text-xs font-semibold py-2.5"
                onClick={() => scrollToSection("challenge")}
              >
                <Gamepad2 className="w-4 h-4 mr-2" />
                Tham gia Thử thách Chiến lược 2040
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

