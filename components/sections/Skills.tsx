import { Cpu, Terminal, Radio } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { SKILL_CLUSTERS } from "@/lib/data";

const ICONS = { cpu: Cpu, terminal: Terminal, radio: Radio };

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-hairline px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <SectionLabel>SEC / SKILLS</SectionLabel>
          <h2
            id="skills-heading"
            className="mb-12 font-sans text-3xl font-medium tracking-tight text-ink md:text-4xl"
          >
            What I work with
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {SKILL_CLUSTERS.map((cluster, i) => {
            const Icon = ICONS[cluster.icon];
            return (
              <Reveal key={cluster.id} delay={i * 0.05}>
                <div className="h-full rounded-[4px] border border-hairline p-6">
                  <Icon
                    size={20}
                    aria-hidden="true"
                    className="mb-4 text-trace"
                  />
                  <h3 className="mb-4 font-sans text-base font-medium text-ink">
                    {cluster.label}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {cluster.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-[4px] border border-hairline px-2 py-1 font-mono text-[12px] text-slate"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {cluster.caption && (
                    <p className="mt-4 font-mono text-[12px] leading-relaxed text-slate">
                      {cluster.caption}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
