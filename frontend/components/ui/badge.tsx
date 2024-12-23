import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-[#22C55E]/40 px-[14px] w-[100px] py-[6px] bg-[#22C55E]/20 text-[#22C55E] hover:bg-primary/80",
        secondary:
          "border-transparent px-[14px] w-[100px] py-[6px] bg-secondary text-secondary-foreground hover:bg-secondary/80",
        pending: "border-transparent text-white px-[14px] w-[100px] py-[6px] bg-yellow-500",
        destructive:
          "border-transparent px-[14px] w-[100px] py-[6px] bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
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

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
