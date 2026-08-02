import Image from "next/image";

import FadeUp from "@/components/ui/FadeUp";

import { LucideFileText } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col gap-8 bg-[url('/background-image.webp')] bg-cover bg-center px-6 py-16 text-center lg:px-20 lg:py-24"
    >
      <div
        className="absolute inset-0 bg-about-overlay"
        aria-hidden
      />

      <FadeUp className="relative z-10">
        <h2 className="md-text text-about-text">
          <span className="special-text">About</span> me
        </h2>
      </FadeUp>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-start lg:gap-14">
        <div className="flex w-full flex-col items-center gap-6 lg:w-[38%]">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:text-left">
            <div className="size-24 overflow-hidden rounded-full ring-2 ring-brand ring-offset-2 ring-offset-transparent">
              <Image
                src="/victory-okoye-portrait-picture.webp"
                alt="Portrait of Victory Okoye"
                width={300}
                height={300}
                className="size-full object-cover"
              />
            </div>
            <div className="text-about-text">
              <h3 className="text-base font-medium opacity-90">Victory Okoye</h3>
              <p className="md-text about-sec-text !text-about-text">
                Web Developer
              </p>
            </div>
          </div>

          <a
            href="/cv.pdf"
            className="hidden w-max lg:block"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="round-button flex cursor-pointer items-center gap-2 px-8 py-3.5 text-sm font-semibold">
              <LucideFileText size={18} />
              View CV
            </span>
          </a>
        </div>

        <div className="flex flex-col gap-4 text-left lg:w-[62%]">
          <p className="about-sec-text">
            I&apos;m a full-stack developer focused on building fast,
            responsive, and user-friendly web applications. I enjoy turning
            ideas into real products that solve practical problems, with a
            strong emphasis on performance, clean design, and scalability.
          </p>
          <p className="about-sec-text">
            I combine theoretical knowledge from my Computer Science degree with
            practical experience to build systems tailored to your needs.
          </p>
          <p className="about-sec-text">
            My work is driven by solving real-world problems — from analytics
            dashboards to interactive platforms — using Next.js, Tailwind CSS,
            and modern JavaScript frameworks.
          </p>
          <p className="about-sec-text">
            I&apos;m constantly improving my skills and learning new tools. The
            goal is simple: applications that are not just functional, but
            genuinely useful and well-designed.
          </p>
        </div>

        <a
          aria-label="View my CV"
          href="/cv.pdf"
          className="mx-auto w-max lg:hidden"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="round-button flex cursor-pointer items-center gap-2 px-8 py-3.5 text-sm font-semibold">
            <LucideFileText size={18} />
            View CV
          </span>
        </a>
      </div>
    </section>
  );
}
