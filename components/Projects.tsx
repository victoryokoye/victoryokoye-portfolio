import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";
import StaggerContainer from "@/components/ui/StaggerContainer";

import { FiArrowRight, FiCheckSquare } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      id: 1,
      imageLink: "/projects/focus-sentry.jpg",
      title: "Focus Sentry — Productivity PWA",
      description:
        "An offline-first productivity app for managing focus sessions, habits, and tasks.",

      problem:
        "Users struggle to stay focused and keep their tasks and habits organized, especially when internet access is unreliable.",

      solution:
        "Built a responsive PWA that lets users manage their focus, habits, and tasks offline, then syncs their data when they reconnect.",

      tools: ["Next.js", "TypeScript", "Tailwind CSS", "Dexie", "Supabase"],

      features: [
        "Offline-first functionality",
        "Focus session tracking",
        "Habit tracking",
        "Todo management",
        "Automatic data sync",
      ],

      impact:
        "Helps users stay productive and maintain access to their data regardless of connectivity.",

      pageLink: "https://focus-sentry.vercel.app/",
    },
    {
      id: 2,
      imageLink: "/projects/digitanotion.png",
      title: "Digitanotion — Corporate Website",

      description:
        "A modern corporate website showcasing Digitanotion’s tech services, solutions, and training programs.",

      problem:
        "Visitors needed a clear and engaging way to understand Digitanotion’s services, expertise, and opportunities.",

      solution:
        "Designed and built responsive interfaces that improved content clarity, navigation, and the overall user experience.",

      tools: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],

      features: [
        "Responsive UI design",
        "Modern landing pages",
        "Clear service navigation",
        "Interactive sections",
        "Mobile-friendly experience",
      ],

      impact:
        "Helped create a professional digital presence that clearly communicates Digitanotion’s services and brand.",

      pageLink: "https://www.digitanotion.com.ng/",
    },
    {
      id: 3,
      imageLink: "/projects/tic-tac-toe.jpg",
      title: "Tic Tac Toe — Interactive Web Game",
      description:
        "A responsive Tic Tac Toe game with AI and two-player modes, designed for quick and engaging gameplay.",

      problem:
        "Players need a simple and engaging way to enjoy Tic Tac Toe either against a computer or with another player, while keeping track of their results.",

      solution:
        "Built an interactive web game with dedicated AI and two-player modes, turn tracking, automatic win detection, score tracking, and quick game resets.",

      tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],

      features: [
        "Play against AI",
        "Two-player mode",
        "Win and draw detection",
        "Scoreboard tracking",
        "Game reset and replay",
        "Responsive interface",
      ],

      impact:
        "Provides a fun, responsive gaming experience while demonstrating interactive UI development, game logic, and browser-based state management.",

      pageLink: "https://victoryokoye.github.io/tictactoe/",
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
              <div className="relative flex h-48 w-full shrink-0 items-center justify-center overflow-hidden bg-muted-surface border-b border-border/40">
                {project.imageLink ? (
                  <Image
                    src={project.imageLink}
                    alt={`Preview of ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    <div
                      className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_srgb,var(--brand)_25%,transparent),transparent_65%)] transition-opacity duration-300 group-hover:opacity-80"
                      aria-hidden
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
          </FadeUp>
        ))}
      </StaggerContainer>
    </section>
  );
}
