import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const additional = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-hairline px-6 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <SectionLabel>SEC / PROJECTS</SectionLabel>
          <h2
            id="projects-heading"
            className="mb-12 font-sans text-3xl font-medium tracking-tight text-ink md:text-4xl"
          >
            What I&apos;ve built
          </h2>
        </Reveal>

        <div className="space-y-6">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.04}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <p className="mb-4 font-mono text-[12px] uppercase tracking-wide text-slate">
            Additional projects
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {additional.map((project) => (
              <div
                key={project.id}
                className="rounded-[4px] border border-hairline p-5"
              >
                <h4 className="mb-1 font-sans text-[15px] font-medium text-ink">
                  {project.title}
                </h4>
                <p className="text-[14px] leading-relaxed text-ink/75">
                  {project.description}
                </p>
                <p className="mt-2 font-mono text-[12px] text-slate">
                  {project.stack.join(" / ")}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
