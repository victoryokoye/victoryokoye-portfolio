import Image from "next/image";

import FadeUp from "@/components/ui/FadeUp";
import Counter from "@/components/ui/Counter";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/victorycokoye",
    icon: (
      <svg width="16" height="16" viewBox="0 0 15 15" fill="none" aria-hidden>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 7.5C15 3.35819 11.6418 0 7.5 0C3.35819 0 0 3.35819 0 7.5C0 11.2431 2.74226 14.346 6.32824 14.9094V9.66849H4.42343V7.5H6.32824V5.84726C6.32824 3.96776 7.44832 2.92889 9.16116 2.92889C9.9817 2.92889 10.8402 3.07548 10.8402 3.07548V4.92124H9.89416C8.96289 4.92124 8.67176 5.49922 8.67176 6.093V7.49994H10.7516L10.4194 9.66843H8.6717V14.9093C12.2577 14.3471 14.9999 11.2442 14.9999 7.49994L15 7.5Z"
          fill="#1977F3"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victory-okoye",
    icon: (
      <svg width="16" height="16" viewBox="0 0 15 15" fill="none" aria-hidden>
        <path
          d="M13.125 1.875H1.875C1.52983 1.875 1.25 2.15483 1.25 2.5V12.5C1.25 12.8452 1.52983 13.125 1.875 13.125H13.125C13.4702 13.125 13.75 12.8452 13.75 12.5V2.5C13.75 2.15483 13.4702 1.875 13.125 1.875ZM5.21264 11.4619H3.54202V6.09375H5.21264V11.4619ZM4.37733 5.35922C3.84108 5.35922 3.4103 4.92516 3.4103 4.39125C3.4103 3.85781 3.84155 3.42422 4.37733 3.42422C4.91171 3.42422 5.34483 3.85781 5.34483 4.39125C5.34483 4.92516 4.91124 5.35922 4.37733 5.35922ZM11.4601 11.4619H9.79419V8.85138C9.79419 8.22888 9.78156 7.42781 8.92606 7.42781C8.0575 7.42781 7.92481 8.10519 7.92481 8.80544V11.4619H6.25887V6.09375H7.85919V6.82544H7.88075C8.10437 6.40356 8.64812 5.95828 9.46044 5.95828C11.1484 5.95828 11.4606 7.06925 11.4606 8.51531L11.4601 11.4619Z"
          fill="#0A66C2"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/victory.c.okoye",
    icon: (
      <Image
        src="/instagram.svg"
        alt=""
        width={16}
        height={16}
        className="size-4"
      />
    ),
  },
  {
    label: "GitHub",
    href: "https://www.github.com/victoryokoye",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 15 15"
        fill="currentColor"
        className="text-text"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.48205 0C3.35037 0 0 3.44279 0 7.68988C0 11.0875 2.14383 13.97 5.11668 14.9868C5.49061 15.0579 5.62789 14.82 5.62789 14.6169C5.62789 14.4334 5.62096 13.8277 5.61773 13.1852C3.53622 13.6503 3.09699 12.2778 3.09699 12.2778C2.75665 11.3891 2.26625 11.1527 2.26625 11.1527C1.58741 10.6754 2.31742 10.6852 2.31742 10.6852C3.06875 10.7393 3.46435 11.4778 3.46435 11.4778C4.13168 12.6532 5.21469 12.3133 5.64164 12.1169C5.7088 11.6199 5.90269 11.2805 6.11668 11.0886C4.45481 10.8942 2.70782 10.2348 2.70782 7.28824C2.70782 6.44869 3.0001 5.7627 3.47872 5.22418C3.40105 5.03036 3.14494 4.24835 3.55121 3.18914C3.55121 3.18914 4.17951 2.98246 5.6093 3.97738C6.20613 3.80699 6.84619 3.72154 7.48205 3.71861C8.1179 3.72154 8.75846 3.80699 9.3564 3.97738C10.7845 2.98246 11.4119 3.18914 11.4119 3.18914C11.8192 4.24835 11.563 5.03036 11.4852 5.22418C11.9649 5.7627 12.2553 6.44869 12.2553 7.28824C12.2553 10.2418 10.505 10.8921 8.83887 11.0825C9.10724 11.3211 9.34636 11.7892 9.34636 12.5066C9.34636 13.5355 9.33769 14.3635 9.33769 14.6169C9.33769 14.8215 9.47237 15.0613 9.85162 14.9857C12.8229 13.9678 14.9639 11.0864 14.9639 7.68988C14.9639 3.44279 11.6141 0 7.48205 0Z"
        />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero relative flex min-h-[100svh] flex-col justify-center gap-10 overflow-hidden px-5 pb-16 pt-18 text-center lg:flex-row lg:items-center lg:gap-16 lg:px-16 lg:pb-20 lg:pt-18 lg:text-left"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-overlay/40 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col w-full items-end justify-center lg:w-[42%] lg:justify-end">
        <FadeUp className="flex flex-col w-full justify-center">
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-full bg-brand/20 blur-3xl"
              aria-hidden
            />
            <Image
              src="/victory-okoye-picture.webp"
              alt="Portrait of Victory Okoye"
              width={420}
              height={420}
              priority
              className="relative mx-auto h-auto w-[min(82vw,360px)] object-contain drop-shadow-[0_20px_50px_rgba(37,99,235,0.25)] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
          <div className="hidden md:block">
            <Stats />
          </div>
        </FadeUp>
      </div>

      <div className="relative z-10 flex w-full flex-col gap-8 lg:w-[50%] lg:gap-10">
        <div className="flex flex-col gap-4">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Victory Okoye
            </p>
            <h1 className="lg-text mt-2 font-bold tracking-tight">
              Web Developer building products that solve real problems
            </h1>
          </FadeUp>

          <FadeUp>
            <p className="mx-auto max-w-md text-base leading-relaxed text-text-sec lg:mx-0 lg:max-w-lg">
              I design and develop fast, responsive websites for businesses and
              individuals — with a focus on clarity, performance, and polish.
            </p>
          </FadeUp>

          <FadeUp>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3.5 lg:justify-start">
              <a href="#projects" className="inline-flex w-full sm:w-auto">
                <span className="square-button flex h-12 w-full cursor-pointer items-center justify-center rounded-xl px-8 text-sm font-semibold shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30">
                  View Projects
                </span>
              </a>
              <a href="#contact" className="inline-flex w-full sm:w-auto">
                <span className="flex h-12 w-full cursor-pointer items-center justify-center rounded-xl border border-border bg-bg-sec px-8 text-sm font-semibold text-text shadow-sm transition-all hover:border-brand/40 hover:bg-muted-surface hover:text-brand">
                  Get in Touch
                </span>
              </a>
            </div>
          </FadeUp>

          <FadeUp>
            <ul className="mt-3 flex items-center justify-center gap-3.5 lg:justify-start">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    aria-label={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-11 items-center justify-center rounded-xl border border-border bg-bg-sec shadow-xs transition-all hover:-translate-y-0.5 hover:scale-105 hover:border-brand/40 hover:shadow-md"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
        <div className="md:hidden">
          <Stats />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 3, suffix: "", text: "Projects Completed" },
    { value: 3, suffix: "+", text: "Years Experience" },
    { value: 50, suffix: "+", text: "Users Served" },
  ];

  return (
    <FadeUp>
      <div className="mx-auto grid w-full max-w-md grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-[var(--shadow-soft)] lg:mx-0 lg:max-w-lg">
        {stats.map((stat) => (
          <div
            key={stat.text}
            className="flex flex-col items-center bg-bg-sec/90 backdrop-blur-md px-3 py-4 sm:py-5"
          >
            <div className="text-xl font-bold tracking-tight text-text sm:text-2xl md:text-3xl">
              <Counter value={stat.value} />
              {stat.suffix}
            </div>
            <p className="small mt-1 text-center text-xs sm:text-sm text-text-sec">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </FadeUp>
  );
}
