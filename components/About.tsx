
export default function About() {
  return(
    <section className="text-center px-8 py-10 flex flex-col gap-5 bg-blue-400">
      <h2><span className="text-brand">About</span>{" "}me</h2>
      <div className="flex flex-col gap-3">
        <div className="size-25 bg-white rounded-full m-auto"></div>
        <div>
          <h3>Victory Okoye</h3>
          <h2>Web Developer</h2>
        </div>
      </div>
      <div className="text-justify">
        <p>I'm a full-stack developer focused on building fast, responsive, and user-friendly web applications. I enjoy turning ideas into real products that solve practical problems, with a strong emphasis on performance, clean design, and scalability.</p>
        <p>My work is heavily influenced by my interest in football and data, which has led me to build projects like analytics dashboards and interactive platforms. I use tools like Next.js, Tailwind CSS, and modern JavaScript frameworks to create smooth and engaging user experiences.</p>
        <p>I'm constantly improving my skills, learning new technologies, and pushing myself to build better, more efficient systems. My goal is simple: to create applications that are not just functional, but genuinely useful and well-designed.</p>
      </div>
      <a href="#"><button className="bg-brand py-3 px-6 rounded-sm">Download CV</button></a>
    </section>
  )
}