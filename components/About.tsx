import Image from "next/image";

import { FiDownload } from "react-icons/fi"

export default function About() {
  return(
    <section className="text-center px-8 py-10 flex flex-col gap-5 bg-blue-400 lg:px-20 lg:py-20">
      <h2><span className="text-brand">About</span>{" "}me</h2>
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-5 w-full items-center justify-center lg:w-[40%]">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="size-25 bg-white rounded-full m-auto overflow-hidden relative">
              <Image
                src="/victory-okoye-portrait-picture.jpg"
                alt="Portrait Picture of Victory Okoye"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:text-left">
              <h3>Victory Okoye</h3>
              <h2>Web Developer</h2>
            </div>
          </div>
          <a href="#" className="w-max hidden lg:block"><button className="bg-brand py-3 px-15 rounded-sm flex gap-2 m-auto">View CV</button></a>
        </div>
        <div className="text-justify lg:w-[60%]">
          <p>I'm a full-stack developer focused on building fast, responsive, and user-friendly web applications. I enjoy turning ideas into real products that solve practical problems, with a strong emphasis on performance, clean design, and scalability.</p><br />
          <p>My work is heavily influenced by my interest in football and data, which has led me to build projects like analytics dashboards and interactive platforms. I use tools like Next.js, Tailwind CSS, and modern JavaScript frameworks to create smooth and engaging user experiences.</p><br />
          <p>I'm constantly improving my skills, learning new technologies, and pushing myself to build better, more efficient systems. My goal is simple: to create applications that are not just functional, but genuinely useful and well-designed.</p>
        </div>
        <a href="#" className="w-max m-auto lg:hidden"><button className="bg-brand py-3 px-6 rounded-sm flex gap-2 m-auto">Download CV{" "}<FiDownload className="text-lg"/></button></a>
      </div>
      
    </section>
  )
}