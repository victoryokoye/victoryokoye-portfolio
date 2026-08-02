import FadeUp from "@/components/ui/FadeUp";
import StaggerContainer from "@/components/ui/StaggerContainer";

import { FiArrowRight, FiCheckSquare } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      id: 1,
      imageLink: "",
      title: "Football Analysis Dashboard",
      description:
        "A real-time football analytics platform that tracks player performance, match stats, and team comparisons with interactive charts.",
      problem:
        "Football fans and analysts lack a simple platform to visualize player and team performance data in one place.",
      solution:
        "Built a responsive dashboard with dynamic charts and filtering to analyze players, teams, and match stats instantly.",
      tools: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      features: [
        "Real-time stats filtering",
        "Player comparison tool",
        "Interactive charts and graphs",
        "Mobile-responsive dashboard",
      ],
      impact:
        "Improved data load speed by 40% and created a smooth user experience for analyzing complex football data.",
      pageLink: "",
    },
    {
      id: 2,
      imageLink: "",
      title: "Modern E-Commerce Platform",
      description:
        "A feature-rich digital store featuring seamless product filtering, dynamic shopping cart management, and instant checkout flow.",
      problem:
        "Small businesses struggle with slow, complex online store setups that degrade mobile user conversion rates.",
      solution:
        "Engineered a ultra-fast, mobile-first storefront powered by Next.js App Router and optimized image loading.",
      tools: ["React", "Next.js", "Tailwind CSS", "Stripe API"],
      features: [
        "Instant search & category filter",
        "Persistent cart with local state",
        "Optimized checkout user journey",
        "Dark & light adaptive theme",
      ],
      impact:
        "Achieved a 98+ Lighthouse performance score and boosted mobile conversion rates significantly.",
      pageLink: "",
    },
    {
      id: 3,
      imageLink: "",
      title: "SaaS Business Landing Suite",
      description:
        "A high-converting web app landing page designed for product showcases, client testimonials, and automated lead capture.",
      problem:
        "Emerging tech startups lose potential leads due to cluttered layouts and unresponsive contact funnels.",
      solution:
        "Created a clean, micro-animated marketing interface with automated contact form notifications and instant WhatsApp CTA.",
      tools: ["TypeScript", "Next.js", "Framer Motion", "Tailwind CSS"],
      features: [
        "Interactive feature preview cards",
        "Smooth scroll animations",
        "Direct WhatsApp & email integration",
        "SEO and Open Graph optimized",
      ],
      impact:
        "Increased visitor engagement time by 35% and streamlined direct client inquiry rates.",
      pageLink: "",
    },
  ];

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
        {projects.map((project) => (
          <FadeUp key={project.id} className="h-full">
            <article className="card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-sec transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-hover)] hover:border-brand/30">
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-muted-surface">
                <div
                  className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--brand)_25%,transparent),transparent_65%)] transition-opacity duration-300 group-hover:opacity-80"
                  aria-hidden
                />
                <span className="relative rounded-full border border-brand/20 bg-bg-sec/80 backdrop-blur-md px-3.5 py-1 text-xs font-semibold tracking-wide text-brand shadow-xs">
                  Project preview
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-3.5 p-6">
                <h3 className="text-xl font-bold tracking-tight text-text leading-snug">{project.title}</h3>
                <p className="text-sm leading-relaxed text-text-sec">{project.description}</p>

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

                <ul className="flex flex-wrap gap-1.5 py-1">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-lg border border-brand/20 bg-brand/10 px-2.5 py-1 text-xs font-medium text-brand"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>

                <ul className="space-y-1.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-xs text-text-sec flex items-start gap-2">
                      <FiCheckSquare className="mt-0.5 shrink-0 text-brand text-sm" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-text-sec pt-1">
                  <span className="font-semibold text-text">Impact:</span> {project.impact}
                </p>

                <a
                  href={project.pageLink || "#contact"}
                  className="mt-auto pt-3"
                  {...(project.pageLink
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="square-button flex h-11 w-full cursor-pointer items-center justify-between rounded-xl px-4 text-sm font-semibold shadow-xs transition-all group-hover:shadow-md">
                    {project.pageLink ? "Visit site" : "Discuss this project"}
                    <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </article>
          </FadeUp>
        ))}
      </StaggerContainer>
    </section>
  );
}
