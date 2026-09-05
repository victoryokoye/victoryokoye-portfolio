import type { Metadata } from "next";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import StaggerContainer from "@/components/ui/StaggerContainer";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/data/projects";
import { FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Projects | Victory Okoye — Full-Stack Developer",
  description:
    "Explore web development and full-stack projects by Victory Okoye, featuring responsive web apps, PWAs, corporate websites, and interactive interfaces built with Next.js, React, TypeScript, and modern web technologies.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Victory Okoye — Full-Stack Developer",
    description:
      "Explore web development and full-stack projects by Victory Okoye, featuring responsive web apps, PWAs, corporate websites, and interactive interfaces.",
    url: "https://victoryokoye.vercel.app/projects",
    siteName: "Victory Okoye's Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Victory Okoye — Full-Stack Developer",
    description:
      "Explore web development and full-stack projects by Victory Okoye, featuring responsive web apps, PWAs, corporate websites, and interactive interfaces.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsPage() {
  const allProjects = getAllProjects();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://victoryokoye.vercel.app/projects#webpage",
        "url": "https://victoryokoye.vercel.app/projects",
        "name": "Projects | Victory Okoye — Full-Stack Developer",
        "description":
          "Explore web development and full-stack projects by Victory Okoye, featuring responsive web apps, PWAs, corporate websites, and interactive interfaces.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://victoryokoye.vercel.app/#website",
          "url": "https://victoryokoye.vercel.app",
          "name": "Victory Okoye's Portfolio",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://victoryokoye.vercel.app/projects#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://victoryokoye.vercel.app",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://victoryokoye.vercel.app/projects",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": "https://victoryokoye.vercel.app/projects#itemlist",
        "name": "Projects by Victory Okoye",
        "numberOfItems": allProjects.length,
        "itemListElement": allProjects.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": project.title,
          "description": project.description,
          ...(project.pageLink ? { "url": project.pageLink } : {}),
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen px-4 pt-28 pb-20 lg:px-16 lg:pt-32 lg:pb-28">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb Navigation */}
        <FadeUp>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-text-sec">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-brand hover:underline"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-border select-none">
                /
              </li>
              <li>
                <span
                  className="font-medium text-text"
                  aria-current="page"
                >
                  Projects
                </span>
              </li>
            </ol>
          </nav>
        </FadeUp>

        {/* Page Header */}
        <FadeUp>
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-brand/20 bg-brand/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand shadow-xs">
              Portfolio & Case Studies
            </span>
            <h1 className="md-text mt-4 font-bold tracking-tight text-text">
              All <span className="special-text">Projects</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-sec md:text-lg">
              A comprehensive showcase of web development and full-stack projects
              built by Victory Okoye. From offline-first progressive web applications
              and corporate websites to interactive browser tools and games, each
              project demonstrates clean code, responsive design, intuitive user
              experience, and practical engineering using Next.js, React, TypeScript,
              and modern web technologies.
            </p>
          </div>
        </FadeUp>

        {/* All Projects Grid */}
        <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project, index) => (
            <FadeUp key={project.id} className="h-full">
              <ProjectCard project={project} priority={index === 0} />
            </FadeUp>
          ))}
        </StaggerContainer>

        {/* Call to Action Card */}
        <FadeUp>
          <div className="mt-16 rounded-2xl border border-border bg-bg-sec p-8 text-center shadow-[var(--shadow-soft)] sm:p-12">
            <h2 className="text-2xl font-bold tracking-tight text-text">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-text-sec">
              Whether you need a responsive marketing website, a full-stack web
              application, or performance optimization, let&apos;s build something
              impactful together.
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                href="/#contact"
                className="square-button group inline-flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold shadow-xs transition-all hover:shadow-md"
              >
                <span>Get in touch</span>
                <FiArrowRight
                  className="text-base transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
