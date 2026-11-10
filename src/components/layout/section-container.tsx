import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  badge?: string;
  badgeVariant?: "default" | "gold" | "green" | "warning";
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

export function SectionContainer({
  id,
  badge,
  badgeVariant = "default",
  title,
  subtitle,
  children,
  className,
  containerClassName,
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-28 relative overflow-hidden", className)}
      {...props}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          containerClassName
        )}
      >
        {(badge || title || subtitle) && (
          <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
            {badge && (
              <span
                className={cn(
                  "inline-block px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest mb-3 border",
                  badgeVariant === "gold"
                    ? "border-warm-gold/40 bg-warm-gold/10 text-warm-gold"
                    : badgeVariant === "green"
                    ? "border-growth-green/40 bg-growth-green/10 text-growth-green"
                    : "border-electric-blue/40 bg-electric-blue/10 text-electric-blue"
                )}
              >
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-off-white mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base sm:text-lg text-muted-gray leading-relaxed font-sans">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

