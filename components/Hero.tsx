
export default function Hero() {
  return (
    <>
      <section className="p-4 flex flex-col text-center">
        <div className="bg-blue-400 w-full h-130"></div>
        <h2>Victory Okoye</h2>
        <h1>Web Developer</h1>
        <p>I design and develop websites that solve real-world problems for businesses and individuals.</p>
        <a href="#projects"><button className="px-8 py-2 bg-blue-500 text-white rounded-sm">View Projects</button></a>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Stats/>
      </section>
    </>
  );
};

function Stats() {
  const stats = [
    {
      value: "3",
      text: "Projects Completed",
    },
    {
      value: "50+",
      text: "Users served",
    },{
      value: "3+",
      text: "Years experience",
    }
  ]
  return(
    <div className="flex gap-12 justify-center py-20">
      <div className="flex flex-col gap-12">
        <div className="bg-white size-40 flex flex-col items-center justify-center">
          <h1>{stats[0].value}</h1>
          <p>{stats[0].text}</p>
        </div>
        <div className="bg-white size-40 flex flex-col items-center justify-center">
          <h1>{stats[2].value}</h1>
          <p>{stats[2].text}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="bg-white size-40 flex flex-col items-center justify-center">
          <h1>{stats[1].value}</h1>
          <p>{stats[1].text}</p>
        </div>
      </div>
    </div>
  )
}