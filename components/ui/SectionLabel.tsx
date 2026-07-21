export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-4 font-mono text-[13px] uppercase tracking-wider text-trace">
      {children}
    </p>
  );
}
