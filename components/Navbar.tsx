"use client"

import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export default function Navbar() {

  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {threshold: 0.6 });

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleClick = (id: string) => {
    setActiveSection(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }

    setIsDark(!isDark);
  };
  
  const navLinks = [
    {
      name: "Home",
      link: "hero"
    },
    {
      name: "Projects",
      link: "projects"
    },
    {
      name: "Services",
      link: "services"
    },
    {
      name: "About",
      link: "about"
    },
    {
      name: "Contact",
      link: "contact"
    }
  ]

  return (
    <>
      <nav className="bg-bg-sec p-4 w-[100vw] border-b border-border flex lg:px-10 fixed z-30">
        <div className="flex gap-2 items-center">
          <div className="bg-brand rounded-full p-3 size-10 text-white flex items-center justify-center">V</div>
          <h3>Victory Okoye</h3>
        </div>
        <div className="ml-auto flex gap-2">
          <ul className="md:flex gap-2 hidden">
            {
              navLinks.map((link, index) => {
                const isActive = activeSection === link.link;
                return (<button key={index} onClick={() => handleClick(link.link)} className={`px-5 py-2 rounded-sm bg-none hover:text-white ${isActive ? "text-white bg-brand hover:bg-brand" : "text-text hover:bg-brand/80 bg-none"}`}>{ link.name }</button>)
              })
            }
          </ul>
          <div className="flex items-center justify-center">
            <button onClick={toggleTheme} className="cursor-pointer flex items-center justify-center px-2">{isDark ? <FiSun className="text-xl fill-text-sec hover:scale-120 transition-transform"/> : <FiMoon className="text-xl fill-text-sec hover:scale-120 transition-transform"/>}</button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer flex items-center justify-center px-2 md:hidden">{menuOpen ? <FiX className="text-xl fill-text-sec hover:scale-120 transition-transform" /> : <FiMenu className="text-xl fill-text-sec hover:scale-120 transition-transform" />}</button>
          </div>
        </div>
      </nav>
      {
        menuOpen && (
          <div className={`fixed inset-0 backdrop-blur-sm bg-black/50 z-10 transition-opacity ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}  onClick={() => setMenuOpen(false)} />
        )
        }
      <div className={`fixed flex flex-col top-0 z-20 right-0 w-2/3 bg-bg-sec transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"} h-full mb-5 pt-18 lg:hidden`}>
        {
          navLinks.map((link, index) => {
            const isActive = activeSection === link.link;
            return (<button key={index} onClick={() => {handleClick(link.link); setMenuOpen(!menuOpen);}} className={`w-full py-5 px-10 text-left rounded-sm bg-none text-text ${isActive ? "font-bold bg-bg hover:bg-bg" : "hover:bg-bg bg-none"}`}>{ link.name }</button>)
          })
        }
      </div>
    </>
  );
};
