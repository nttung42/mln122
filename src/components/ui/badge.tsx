import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-electric-blue/40 bg-electric-blue/15 text-electric-blue",
        gold:
          "border-warm-gold/40 bg-warm-gold/15 text-warm-gold",
        green:
          "border-growth-green/40 bg-growth-green/15 text-growth-green",
        warning:
          "border-warning/40 bg-warning/15 text-warning",
        outline:
          "border-border-subtle text-muted-gray bg-deep-surface/40",
        verified:
          "border-growth-green/50 bg-growth-green/10 text-growth-green flex items-center gap-1",
        illustrative:
          "border-warm-gold/50 bg-warm-gold/10 text-warm-gold flex items-center gap-1",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

