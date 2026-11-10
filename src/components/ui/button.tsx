import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-midnight-navy disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-electric-blue text-white shadow hover:bg-electric-blue/90 border border-electric-blue/50",
        gold:
          "bg-warm-gold text-midnight-navy font-semibold shadow hover:bg-warm-gold/90 border border-warm-gold/60",
        outline:
          "border border-border-subtle bg-deep-surface/40 hover:bg-surface-elevated hover:text-off-white text-muted-gray",
        secondary:
          "bg-surface-elevated text-off-white hover:bg-surface-elevated/80 border border-border-subtle",
        ghost:
          "hover:bg-surface-elevated hover:text-off-white text-muted-gray",
        link: "text-electric-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

