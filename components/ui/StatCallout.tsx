export default function StatCallout({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-[4px] border border-amber/40 bg-amber/[0.06] px-3 py-1.5 font-mono text-[13px] text-amber">
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-amber" />
      {label}
    </span>
  );
}
