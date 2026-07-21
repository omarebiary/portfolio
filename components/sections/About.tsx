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
            ahead of me. most of what I know about telecom right now
            comes from a training program and my own reading, not a
            transcript.
          </p>
          <p className="text-[17px] leading-relaxed text-ink/85">
            What I can show you is how I work. I've built embedded systems
             from the hardware up, written a real-time collaborative
              editor from scratch, and presented technical projects 
              to judges and audiences with confidence. I enjoy tackling challenging 
              problems, learning quickly, and taking ownership from idea 
              to implementation. I'd much rather let the quality of my
               work speak for itself.
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
