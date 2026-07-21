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
            I am deeply motivated by learning challenging concepts and applying 
            them through practical projects. From embedded systems to software 
            development, I enjoy turning ideas into working solutions and 
            continuously expanding my technical skills through hands-on experience.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
