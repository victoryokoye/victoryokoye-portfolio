import Image from "next/image";
import { FiArrowRight, FiCheckSquare } from "react-icons/fi";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-sec transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-hover)] hover:border-brand/30">
      <div className="relative flex h-48 w-full shrink-0 items-center justify-center overflow-hidden bg-muted-surface border-b border-border/40">
        {project.imageLink ? (
          <Image
            src={project.imageLink}
            alt={`Preview of ${project.title}`}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--brand)_25%,transparent),transparent_65%)] transition-opacity duration-300 group-hover:opacity-80"
              aria-hidden="true"
            />
            <span className="relative rounded-full border border-brand/20 bg-bg-sec/80 backdrop-blur-md px-3.5 py-1 text-xs font-semibold tracking-wide text-brand shadow-xs">
              Project preview
            </span>
          </>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3.5 p-6">
        <h3 className="text-xl font-bold tracking-tight text-text leading-snug">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-text-sec">
          {project.description}
        </p>

        <div className="space-y-1.5 rounded-xl bg-muted-surface/50 p-3 text-xs">
          <p>
            <span className="font-semibold text-text">Problem:</span>{" "}
            <span className="text-text-sec">{project.problem}</span>
          </p>
          <p>
            <span className="font-semibold text-text">Solution:</span>{" "}
            <span className="text-text-sec">{project.solution}</span>
          </p>
        </div>

        <ul className="flex flex-wrap gap-1.5 py-1" aria-label="Technologies used">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="rounded-lg border border-brand/20 bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand"
            >
              {tool}
            </li>
          ))}
        </ul>

        <ul className="space-y-1.5" aria-label="Key features">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="text-xs text-text-sec flex items-start gap-2"
            >
              <FiCheckSquare
                className="mt-0.5 shrink-0 text-brand text-sm"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs text-text-sec pt-1">
          <span className="font-semibold text-text">Impact:</span>{" "}
          {project.impact}
        </p>

        <a
          href={project.pageLink || "#contact"}
          className="mt-auto pt-3"
          aria-label={project.pageLink ? `Visit ${project.title} live website` : `Discuss ${project.title}`}
          {...(project.pageLink
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <span className="square-button flex h-11 w-full cursor-pointer items-center justify-between rounded-xl px-4 text-sm font-semibold shadow-xs transition-all group-hover:shadow-md">
            {project.pageLink ? "Visit site" : "Discuss this project"}
            <FiArrowRight
              className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </a>
      </div>
    </article>
  );
}
