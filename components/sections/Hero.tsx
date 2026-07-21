import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden border-b border-hairline px-6 py-24 md:px-10 md:py-32"
    >
      {/* Faint graph-paper grid, hero only -- atmosphere, not texture that persists */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #12181f 1px, transparent 1px), linear-gradient(to bottom, #12181f 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative mx-auto flex max-w-[1120px] items-center justify-between gap-16">
        {/* Left Side */}
        <div>
          <p className="mb-6 font-mono text-[13px] uppercase tracking-wider text-slate">
            Computer &amp; Communications Engineering
          </p>

          <h1 className="max-w-[16ch] font-sans text-5xl font-medium tracking-tight text-ink md:text-6xl">
            Omar Elebiary
          </h1>

          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/80 md:text-xl">
            Building toward telecom and network engineering &mdash; with the
            embedded systems fundamentals and the presentation experience to
            back it up.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="hidden lg:flex flex-shrink-0 justify-end -ml-12">          
          <Image
            src="/omar.jpeg"
            alt="Omar Elebiary"
            width={400}
            height={400}
            priority
            className="rounded-3xl object-cover shadow-2xl border border-hairline -translate-x-12"
/>

        </div>
      </div>
    </section>
  );
}