import Image from "next/image";

import FadeUp from "@/components/ui/FadeUp";
import Counter from "@/components/ui/Counter";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/victory-okoye",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 15 15"
        fill="none"
        focusable="false"
        aria-hidden="true"
      >
        <path
          d="M13.125 1.875H1.875C1.52983 1.875 1.25 2.15483 1.25 2.5V12.5C1.25 12.8452 1.52983 13.125 1.875 13.125H13.125C13.4702 13.125 13.75 12.8452 13.75 12.5V2.5C13.75 2.15483 13.4702 1.875 13.125 1.875ZM5.21264 11.4619H3.54202V6.09375H5.21264V11.4619ZM4.37733 5.35922C3.84108 5.35922 3.4103 4.92516 3.4103 4.39125C3.4103 3.85781 3.84155 3.42422 4.37733 3.42422C4.91171 3.42422 5.34483 3.85781 5.34483 4.39125C5.34483 4.92516 4.91124 5.35922 4.37733 5.35922ZM11.4601 11.4619H9.79419V8.85138C9.79419 8.22888 9.78156 7.42781 8.92606 7.42781C8.0575 7.42781 7.92481 8.10519 7.92481 8.80544V11.4619H6.25887V6.09375H7.85919V6.82544H7.88075C8.10437 6.40356 8.64812 5.95828 9.46044 5.95828C11.1484 5.95828 11.4606 7.06925 11.4606 8.51531L11.4601 11.4619Z"
          fill="currentColor"
          className="text-[#0A66C2]"
        />
      </svg>
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
        focusable="false"
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
  {
    label: "Facebook",
    href: "https://facebook.com/victorycokoye",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 15 15"
        fill="none"
        focusable="false"
        aria-hidden="true"
      >
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
    label: "Instagram",
    href: "https://www.instagram.com/victory.c.okoye",
    icon: (
      <Image
        src="/images/icons/instagram.svg"
        alt=""
        width={16}
        height={16}
        className="size-4"
      />
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-16 lg:px-16 lg:pt-32 lg:pb-24"
    >
      {/* Subtle background ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-radial at-c from-brand/[0.06] via-transparent to-transparent blur-2xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 lg:gap-16">
        {/* Main 2-column Hero content: Portrait (Right), Content (Left), Vertically Centered */}
        <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left Column: Hero Text Content */}
          <div className="flex w-full flex-col items-center gap-7 text-center lg:w-[58%] lg:items-start lg:text-left">
            <FadeUp>
              <span className="inline-block rounded-full border border-brand/20 bg-brand/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-brand shadow-xs">
                Full-Stack Developer
              </span>
            </FadeUp>

            <FadeUp>
              <h1 className="lg-text max-w-2xl text-balance font-bold tracking-tight text-text lg:leading-[1.15]">
                I build modern web applications that help businesses grow.
              </h1>
            </FadeUp>

            <FadeUp>
              <p className="max-w-2xl text-base leading-relaxed text-text-sec sm:text-lg sm:leading-relaxed">
                I&apos;m Victory Okoye, a full-stack developer focused on
                creating fast, responsive, and user-friendly websites that help
                businesses build a strong online presence.
              </p>
            </FadeUp>

            <FadeUp>
              <div className="flex w-full flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-center lg:justify-start">
                <a href="#projects" className="w-full sm:w-auto">
                  <span className="square-button flex h-12 w-full cursor-pointer items-center justify-center rounded-xl px-8 text-sm font-semibold shadow-md shadow-brand/20 transition-all hover:shadow-lg hover:shadow-brand/30">
                    View Projects
                  </span>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <span className="flex h-12 w-full cursor-pointer items-center justify-center rounded-xl border border-border bg-bg-sec px-8 text-sm font-semibold text-text shadow-xs transition-all hover:border-brand/40 hover:bg-muted-surface hover:text-brand">
                    Get in Touch
                  </span>
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Polished Portrait Composition */}
          <div className="flex flex-col gap-5 w-full items-center justify-center lg:w-[42%] lg:justify-start">
            <FadeUp>
              <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px]">
                {/* Subtle blue ambient glow behind container */}
                <div
                  className="absolute -inset-4 rounded-[2.5rem] bg-brand/15 blur-2xl transition-all duration-500"
                  aria-hidden
                />

                {/* Rounded Portrait Frame */}
                <div className="relative overflow-hidden rounded-[2.25rem] border border-border/80 bg-gradient-to-b from-brand/10 via-muted-surface/40 to-bg-sec/90 shadow-[var(--shadow-soft)]">
                  {/* Subtle radial backdrop glow behind head */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,color-mix(in_srgb,var(--brand)_22%,transparent),transparent_70%)]"
                    aria-hidden
                  />

                  {/* Profile Image */}
                  <Image
                    src="/images/victory-okoye.png"
                    alt="Portrait of Victory Okoye"
                    width={440}
                    height={440}
                    priority
                    className="relative mx-auto h-auto w-full pt-4 px-3 object-contain drop-shadow-md transition-transform duration-500 hover:scale-[1.02]"
                  />

                  {/* Soft bottom edge gradient blend to integrate cut-out cleanly */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-bg-sec via-bg-sec/75 to-transparent"
                    aria-hidden
                  />
                </div>
              </div>
            </FadeUp>
            <FadeUp>
              <div className="flex items-center gap-3 pt-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-text-sec/70">
                  Find me on
                </span>
                <div className="h-px w-6 bg-border" />
                <ul className="flex items-center gap-2.5">
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <a
                        aria-label={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-10 items-center justify-center rounded-xl border border-border bg-bg-sec text-text-sec shadow-2xs transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-brand hover:shadow-xs"
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Standalone Stats Section at the Bottom of Hero */}
        <div className="pt-6 lg:pt-8">
          <Stats />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: 3, suffix: "", label: "Projects Completed" },
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "Users Served" },
  ];

  return (
    <FadeUp>
      <section className="relative mx-auto w-full max-w-5xl overflow-hidden px-2 py-6 sm:px-4 sm:py-8">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-3xl"
        />

        {/* Section header */}
        <div className="mb-8 flex items-center gap-4">
          <span className="h-px flex-1 bg-border/70" />

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-text-sec sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_10px_var(--brand)]" />
            Impact
          </div>

          <span className="h-px flex-1 bg-border/70" />
        </div>

        {/* Metrics */}
        <div className="relative grid grid-cols-1 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group relative flex flex-col items-center px-6 py-6 text-center sm:py-4 ${
                index !== 0
                  ? "border-t border-border/60 sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              {/* Metric number */}
              <div className="relative">
                <div className="absolute inset-0 -z-10 scale-75 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="text-5xl font-black leading-none tracking-[-0.06em] text-text sm:text-6xl lg:text-7xl">
                  <span>
                    {stat.value < 10 ? "0" : ""}
                    <Counter value={stat.value} />
                  </span>
                  <span className="text-brand">{stat.suffix}</span>
                </div>
              </div>

              {/* Label */}
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-text-sec sm:text-xs">
                {stat.label}
              </p>

              {/* Bottom accent */}
              <div className="mt-5 h-px w-8 bg-brand/40 transition-all duration-300 group-hover:w-14 group-hover:bg-brand" />
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex items-center gap-4">
          <span className="h-px w-8 bg-brand/50" />

          <p className="text-center text-xs font-medium tracking-wide text-text-sec sm:text-sm">
            Building digital experiences that turn ideas into useful products.
          </p>

          <span className="h-px flex-1 bg-border/60" />
        </div>
      </section>
    </FadeUp>
  );
}
