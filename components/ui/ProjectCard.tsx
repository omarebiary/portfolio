import { ArrowUpRight, Code2 } from "lucide-react";
import { Project } from "@/types";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-[4px] border border-hairline p-6 transition-colors duration-150 ease-out hover:border-trace md:p-8">
      <header className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-sans text-xl font-medium text-ink">
          {project.title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} emphasis>
              {tag}
            </Tag>
          ))}
        </div>
      </header>

      <div className="mb-6 h-px w-full bg-hairline" />

      <p className="mb-6 max-w-[65ch] text-[15px] leading-relaxed text-ink/85">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[12px] uppercase tracking-wide text-slate transition-colors duration-150 group-hover:text-ink"
            >
              {tech}
              <span className="mx-1.5 text-hairline last:hidden">&middot;</span>
            </span>
          ))}
        </div>

        <a
          href={project.href ?? "https://github.com/omarebiary"}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-[13px] text-slate underline-offset-4 hover:text-trace hover:underline"
        >
          <Code2 size={14} aria-hidden="true" />
          View on GitHub
          <ArrowUpRight size={13} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
