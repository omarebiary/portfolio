import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-hairline px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <SectionLabel>SEC / ABOUT</SectionLabel>
          <h2
            id="about-heading"
            className="mb-8 font-sans text-3xl font-medium tracking-tight text-ink md:text-4xl"
          >
            Still early, moving fast
          </h2>
        </Reveal>

        <Reveal delay={0.05} className="max-w-[68ch] space-y-5">
          <p className="text-[17px] leading-relaxed text-ink/85">
            I&apos;m a third-year Computer and Communications Engineering
            student at Cairo University, working toward a specialization in
            communication systems. My coursework in that direction is still
            ahead of me &mdash; most of what I know about telecom right now
            comes from a training program and my own reading, not a
            transcript.
          </p>
          <p className="text-[17px] leading-relaxed text-ink/85">
            What I can show you is how I work: I&apos;ve built embedded
            systems from the hardware up, written a real-time collaborative
            editor from scratch, and stood in front of judges and audiences
            enough times to be comfortable doing it again. My GPA
            doesn&apos;t fully reflect that &mdash; a heavy course load
            brought my cumulative average down to 2.87, but I pulled a 3.81
            the semester I had more room to focus. I&apos;d rather tell you
            that upfront than have you find the number and wonder.
          </p>
          <p className="text-[17px] leading-relaxed text-ink/85">
            I build things, then I explain them clearly to whoever&apos;s in
            the room. That combination is rarer than either skill on its
            own.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
