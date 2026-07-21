import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import StatCallout from "@/components/ui/StatCallout";
import { LEADERSHIP } from "@/lib/data";

export default function Leadership() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="border-b border-hairline px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <SectionLabel>SEC / LEADERSHIP</SectionLabel>
          <h2
            id="leadership-heading"
            className="mb-12 font-sans text-3xl font-medium tracking-tight text-ink md:text-4xl"
          >
            Outside the lab
          </h2>
        </Reveal>

        <div className="space-y-10">
          {LEADERSHIP.map((entry, i) => (
            <Reveal key={entry.id} delay={i * 0.05}>
              <div className="border-t border-hairline pt-8 first:border-t-0 first:pt-0">
                <h3 className="font-sans text-xl font-medium text-ink">
                  {entry.org}
                </h3>
                <p className="mb-4 font-mono text-[13px] text-slate">
                  {entry.role}
                </p>
                <div className="max-w-[68ch] space-y-4">
                  {entry.body.map((para, idx) => (
                    <p
                      key={idx}
                      className="text-[15px] leading-relaxed text-ink/85"
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {entry.stats.map((stat) => (
                    <StatCallout key={stat.label} label={stat.label} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
