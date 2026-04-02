
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";

export default function Navbar() {
  
  const navLinks = [
    {
      name: "Home",
      link: null
    },
    {
      name: "Projects",
      link: null
    },
    {
      name: "Services",
      link: null
    },
    {
      name: "About",
      link: null
    },
    {
      name: "Contact",
      link: null
    }
  ]

  return (
    <>
      <nav className="bg-white p-4 flex lg:px-10">
        <div className="flex gap-2 items-center">
          <div className="bg-brand rounded-full p-3 size-10 text-white flex items-center justify-center">V</div>
          <h3>Victory Okoye</h3>
        </div>
        <div className="ml-auto flex gap-2">
          <ul className="md:flex gap-2 hidden">
            {
              navLinks.map((link, index) => (
                <li key={index}><a className={`block px-5 py-2 rounded-sm ${(index == 0 || index == 4) ? 'bg-brand text-white' : null }`} href="">{ link.name }</a></li>
              ))
            }
          </ul>
          <span className="flex items-center justify-center px-4"><FiMoon className="text-xl fill-text-sec hover:scale-120 transition-transform"/></span>
          <span className="bg-brand text-white md:hidden"><FiMenu /></span>
        </div>
      </nav>
    </>
  );
};
