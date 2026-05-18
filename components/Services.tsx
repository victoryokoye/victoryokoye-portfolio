import FadeUp from "@/components/ui/FadeUp"

import { FiPenTool, FiServer, FiLayout } from "react-icons/fi";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiNextdotjs, SiFigma, SiAdobe, SiFramer, SiNodedotjs, SiTypescript, SiFirebase, SiGit, SiGithub, SiMongodb, SiPostgresql } from "react-icons/si";
import { CgSearchFound } from "react-icons/cg";
import { VscVscode } from "react-icons/vsc";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Front-End Web Development",
      description: "I build fast, responsive websites that give businesses and personal brands a clean, professional look and a smooth user experience across all devices."
    },
    {
      id: 2,
      title: "Web design",
      description: "I design modern, user-focused websites that help businesses and personal brands stand out, build trust, and turn visitors into customers."
    },
    {
      id: 3,
      title: "Back-End Web Development",
      description: "I create secure, reliable systems that power your website-handling data, functionality, and performance so your business runs smoothly online."
    }
  ]
  return (
    <>
      <section id="services" className="flex flex-col gap-8 py-10 lg:py-20">
        <div className="p-4 flex flex-col gap-10 lg:gap-2 lg:px-20">
          <FadeUp className="">
            <h2 className="md-text"><span className="special-text">Services</span>{" "}I Offer</h2>
          </FadeUp>
          <div className="flex gap-2 p-2 lg:gap-15">
            <div className="flex flex-col gap-8 lg:gap-15 lg:flex-row">
              <FadeUp key={services[0].id} className="lg:mt-20">
                <FiLayout className="text-brand-light text-3xl mb-1" />
                <h4>{services[0].title}</h4>
                <p>{services[0].description}</p>
              </FadeUp>
              <FadeUp className="" key={services[2].id}>
                <FiServer className="text-brand-light text-3xl mb-1" />
                <h4>{services[2].title}</h4>
                <p>{services[2].description}</p>
              </FadeUp>
            </div>
            <div className="flex items-center">
              <FadeUp key={services[1].id} className="lg:mt-20">
                <FiPenTool className="text-brand-light text-3xl mb-1" />
                <h4>{services[1].title}</h4>
                <p>{services[1].description}</p>
              </FadeUp>
            </div>
          </div>
        </div>
        <TechStack/>
      </section>
    </>
  );
};

function TechStack() {
  const techStack = [
    {
      id: 1,
      name: "HTML",
      icon: SiHtml5
    },
    {
      id: 2,
      name: "CSS",
      icon: SiCss3
    },
    {
      id: 3,
      name: "Javascript",
      icon: SiJavascript
    },
    {
      id: 4,
      name: "Tailwind CSS",
      icon: SiTailwindcss
    },
    {
      id: 5,
      name: "React",
      icon: SiReact
    },
    {
      id: 6,
      name: "Next.js",
      icon: SiNextdotjs
    },
    {
      id: 7,
      name: "Figma",
      icon: SiFigma
    },
    {
      id: 8,
      name: "S.E.O",
      icon: CgSearchFound
    },
    {
      id: 9,
      name: "Adobe Illustrator",
      icon: SiAdobe
    },
    {
      id: 10,
      name: "Framer Motion",
      icon: SiFramer
    },
    {
      id: 11,
      name: "Node.js",
      icon: SiNodedotjs
    },
    {
      id: 12,
      name: "Typescript",
      icon: SiTypescript
    },
    {
      id: 13,
      name: "Firebase",
      icon: SiFirebase
    },
    {
      id: 14,
      name: "Git",
      icon: SiGit
    },
    {
      id: 15,
      name: "Github",
      icon: SiGithub
    },
    {
      id: 16,
      name: "Mongodb",
      icon: SiMongodb
    },
    {
      id: 17,
      name: "Postgresql",
      icon: SiPostgresql
    },
    {
      id: 18,
      name: "Visual Studio Code",
      icon: VscVscode
    }
  ]

  const duplicatedTechStack = [...techStack, ...techStack];

  return(
    <div className="overflow-hidden w-full lg:my-10">
      <ul className="flex animate-scroll gap-5">
        {
          duplicatedTechStack.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <li key={i} className="border border-border flex gap-2 items-center py-3 px-6 rounded-full">
                <Icon className="text-brand-light"/>
                <h4 className="w-max">{tech.name}</h4>
              </li>
            )}
          )
        }
      </ul>
    </div>
    
  )
}