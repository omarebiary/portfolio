import { Mail, Link as LinkIcon, Code2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <SectionLabel>SEC / CONTACT</SectionLabel>
          <h2
            id="contact-heading"
            className="mb-6 font-sans text-3xl font-medium tracking-tight text-ink md:text-4xl"
          >
            Let&apos;s talk
          </h2>
          <p className="mb-10 max-w-[56ch] text-[17px] leading-relaxed text-ink/85">
            Open to opportunities in telecom, network engineering, and
            embedded systems. If any of this is relevant to what you&apos;re
            hiring for, I&apos;d like to hear from you.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              href="mailto:omarebiary123@gmail.com"
              variant="primary"
            >
              <Mail size={16} aria-hidden="true" />
              Email Me
            </Button>
            <Button
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              <LinkIcon size={16} aria-hidden="true" />
              LinkedIn
            </Button>
            <Button
              href="https://github.com/omarebiary"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
            >
              <Code2 size={16} aria-hidden="true" />
              GitHub
            </Button>
          </div>
        </Reveal>

        <footer className="mt-20 border-t border-hairline pt-6">
          <p className="font-mono text-[12px] text-slate">
            Degla, Maadi, Cairo, Egypt
          </p>
        </footer>
      </div>
    </section>
  );
}
