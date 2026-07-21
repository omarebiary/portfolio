import { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[4px] border px-5 py-2.5 font-sans text-[15px] font-medium transition-colors duration-150 ease-out",
        variant === "primary"
          ? "border-trace bg-trace text-substrate hover:bg-transparent hover:text-trace"
          : "border-ink bg-transparent text-ink hover:bg-ink hover:text-substrate",
        className
      )}
    >
      {children}
    </a>
  );
}
