
export default function About() {
  return(
    <section className="text-center p-5 flex flex-col gap-5">
      <h2><span className="text-blue-500">About</span>{" "}me</h2>
      <div>
        <div className="size-25 bg-white rounded-full m-auto"></div>
        <h3>Victory Okoye</h3>
        <h2>Web Developer</h2>
      </div>
      <div className="text-justify">
        <p>I'm a full-stack developer focused on building fast, responsive, and user-friendly web applications. I enjoy turning ideas into real products that solve practical problems, with a strong emphasis on performance, clean design, and scalability.</p>
        <p>My work is heavily influenced by my interest in football and data, which has led me to build projects like analytics dashboards and interactive platforms. I use tools like Next.js, Tailwind CSS, and modern JavaScript frameworks to create smooth and engaging user experiences.</p>
        <p>I'm constantly improving my skills, learning new technologies, and pushing myself to build better, more efficient systems. My goal is simple: to create applications that are not just functional, but genuinely useful and well-designed.</p>
      </div>
      <a href="#"><button className="bg-blue-500 py-3 px-6 rounded-sm text-white">Download CV</button></a>
    </section>
  )
}