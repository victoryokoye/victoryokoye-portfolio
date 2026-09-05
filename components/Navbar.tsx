"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useTheme } from "next-themes";

import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const { resolvedTheme, setTheme } = useTheme();

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 12);

      if (currentScrollY <= 20) {
        setVisible(true);
      } else if (Math.abs(currentScrollY - lastScrollY) > 6) {
        if (currentScrollY > lastScrollY) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = document.querySelectorAll("section");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleClick = (id: string) => {
    if (pathname !== "/") {
      if (id === "projects") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push(id === "hero" ? "/" : `/#${id}`);
      }
      return;
    }
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = () => {
    if (pathname !== "/") {
      router.push("/");
      return;
    }
    handleClick("hero");
  };

  const isDark = resolvedTheme === "dark";
  const currentSection = pathname === "/projects" ? "projects" : activeSection;

  const navLinks = [
    { name: "Home", link: "hero" },
    { name: "Projects", link: "projects" },
    { name: "Services", link: "services" },
    { name: "About", link: "about" },
    { name: "Contact", link: "contact" },
  ];

  return (
    <>
      <nav
        className={`nav-glass fixed top-0 left-0 right-0 z-50 w-full border-b border-border px-4 py-3 transition-all duration-300 lg:px-10 ${
          scrolled ? "shadow-[var(--shadow-soft)]" : ""
        } ${visible || menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="mx-auto flex max-w-7xl items-center">
          <button
            type="button"
            onClick={handleLogoClick}
            className="flex items-center gap-3 cursor-pointer"
            aria-label="Go to home"
          >
            <Image
              src="/victory-okoye-logo.svg"
              alt="Victory Okoye Logo"
              width={30}
              height={30}
              className="h-5 w-auto"
              priority
            />
            <span className="text-lg font-semibold tracking-tight">
              Victory Okoye
            </span>
          </button>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden gap-1 md:flex">
              {navLinks.map((link) => {
                const isActive = currentSection === link.link;
                return (
                  <button
                    key={link.link}
                    type="button"
                    onClick={() => handleClick(link.link)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-brand text-on-brand"
                        : "text-text-sec hover:bg-muted-surface hover:text-text"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              aria-label={
                !mounted
                  ? "Toggle theme"
                  : isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
              }
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="theme-toggle relative cursor-pointer overflow-hidden p-2 transition-transform hover:scale-105 active:scale-95"
            >
              {mounted ? (
                <div className="relative flex items-center justify-center transition-transform duration-300">
                  {isDark ? (
                    <FiSun className="text-xl text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" aria-hidden="true" />
                  ) : (
                    <FiMoon className="text-xl text-slate-700 transition-transform duration-300 rotate-0 hover:-rotate-12" aria-hidden="true" />
                  )}
                </div>
              ) : (
                <span className="size-5" />
              )}
            </button>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="theme-toggle inline-flex cursor-pointer md:hidden"
            >
              {menuOpen ? (
                <FiX className="text-xl" aria-hidden="true" />
              ) : (
                <FiMenu className="text-xl" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-20 bg-slate-950/60 backdrop-blur-md transition-opacity duration-300 md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
      )}

      <div
        className={`fixed top-0 right-0 z-30 flex h-full w-[min(20rem,85vw)] flex-col border-l border-border bg-bg-sec/95 backdrop-blur-xl pt-24 px-6 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = currentSection === link.link;
            return (
              <button
                type="button"
                aria-label={`${link.name} section`}
                key={link.link}
                onClick={() => {
                  handleClick(link.link);
                  setMenuOpen(false);
                }}
                className={`w-full rounded-xl px-5 py-3.5 text-left text-base font-medium transition-all ${
                  isActive
                    ? "bg-brand text-on-brand shadow-sm font-semibold"
                    : "text-text-sec hover:bg-muted-surface hover:text-text"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
