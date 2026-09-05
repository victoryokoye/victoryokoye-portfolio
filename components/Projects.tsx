import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import StaggerContainer from "@/components/ui/StaggerContainer";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";
import { FiArrowRight } from "react-icons/fi";

export default function Projects() {
  const featuredProjects = getFeaturedProjects(3);

  return (
    <section
      id="projects"
      className="flex flex-col gap-10 bg-bg-sec px-4 pb-20 pt-16 lg:px-16 lg:pb-28 lg:pt-24"
    >
      <FadeUp>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="md-text">
            My <span className="special-text">Projects</span>
          </h2>
          <p className="mt-3">
            Selected work focused on useful products, clear UX, and solid
            engineering.
          </p>
        </div>
      </FadeUp>

      <StaggerContainer className="mx-auto grid max-w-7xl gap-8 px-2 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <FadeUp key={project.id} className="h-full">
            <ProjectCard project={project} />
          </FadeUp>
        ))}
      </StaggerContainer>

      <FadeUp>
        <div className="flex justify-center pt-4">
          <Link
            href="/projects"
            className="square-button group inline-flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold shadow-xs transition-all hover:shadow-md"
          >
            <span>View all projects</span>
            <FiArrowRight
              className="text-base transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}
