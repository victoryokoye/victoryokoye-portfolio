import FadeUp from "@/components/ui/FadeUp";

import { FiPenTool, FiServer, FiLayout } from "react-icons/fi";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiFigma,
  SiAdobe,
  SiFramer,
  SiNodedotjs,
  SiTypescript,
  SiFirebase,
  SiGit,
  SiGithub,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { CgSearchFound } from "react-icons/cg";
import { VscVscode } from "react-icons/vsc";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Front-End Web Development",
      description:
        "I build fast, responsive websites that give businesses and personal brands a clean, professional look and a smooth user experience across all devices.",
      icon: FiLayout,
    },
    {
      id: 2,
      title: "Web Design",
      description:
        "I design modern, user-focused websites that help businesses and personal brands stand out, build trust, and turn visitors into customers.",
      icon: FiPenTool,
    },
    {
      id: 3,
      title: "Back-End Web Development",
      description:
        "I create secure, reliable systems that power your website — handling data, functionality, and performance so your business runs smoothly online.",
      icon: FiServer,
    },
  ];

  return (
    <section id="services" className="flex flex-col gap-12 py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
        <FadeUp>
          <div className="max-w-2xl">
            <h2 className="md-text">
              <span className="special-text">Services</span> I Offer
            </h2>
            <p className="mt-3">
              End-to-end web work — from design and interface to the systems
              behind the scenes.
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeUp key={service.id}>
                <div
                  className={`h-full rounded-2xl border border-border bg-bg-sec p-6 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 ${
                    index === 1 ? "md:translate-y-4" : ""
                  }`}
                >
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="text-2xl" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>

      <TechStack />
    </section>
  );
}

function TechStack() {
  const techStack = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Figma", icon: SiFigma },
    { name: "S.E.O", icon: CgSearchFound },
    { name: "Adobe Illustrator", icon: SiAdobe },
    { name: "Framer Motion", icon: SiFramer },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Firebase", icon: SiFirebase },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "VS Code", icon: VscVscode },
  ];

  const duplicatedTechStack = [...techStack, ...techStack];

  return (
    <div className="overflow-hidden py-4">
      <ul className="animate-scroll flex gap-4 px-4">
        {duplicatedTechStack.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <li
              key={`${tech.name}-${i}`}
              className="flex items-center gap-2 rounded-full border border-border bg-bg-sec px-5 py-3 shadow-[var(--shadow-soft)]"
            >
              <Icon
                className="text-brand-light"
                role={undefined}
                aria-hidden="true"
              />
              <span className="w-max text-sm font-medium text-text">
                {tech.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
