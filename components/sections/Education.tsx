import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-hairline px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <SectionLabel>SEC / EDUCATION</SectionLabel>
          <h2
            id="education-heading"
            className="mb-8 font-sans text-3xl font-medium tracking-tight text-ink md:text-4xl"
          >
            Cairo University
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="max-w-[68ch]">
          <p className="text-[17px] font-medium text-ink">
            Bachelor of Science, Computer and Communications Engineering
          </p>
          <p className="mt-1 font-mono text-[13px] text-slate">
            Electronics Track &mdash; Specializing in Communication Systems
            &middot; Expected graduation: 2027
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-ink/85">
            Cumulative GPA: 2.87. Second-semester GPA: 3.81 &mdash; the
            semester my course load left the most room to focus, and the
            number I&apos;d point to if you want a sense of what I&apos;m
            capable of when the load is manageable.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
