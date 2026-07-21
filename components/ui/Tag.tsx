import { cn } from "@/lib/cn";

export default function Tag({
  children,
  emphasis = false,
}: {
  children: string;
  emphasis?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-[4px] border px-2 py-0.5 font-mono text-[12px] uppercase tracking-wide",
        emphasis
          ? "border-trace/40 text-trace"
          : "border-hairline text-slate"
      )}
    >
      {children}
    </span>
  );
}
