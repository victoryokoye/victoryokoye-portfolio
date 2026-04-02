import Image from "next/image";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col text-center gap-2 lg:text-left lg:flex-row">
        <div className="flex items-center justify-center w-full h-130 lg:w-[50%]">
          <div className="relative h-140 w-140">
            <Image
              src="/victory-okoye-picture.png"
              alt="Picture of Victory Okoye"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:justify-center lg:py-25 lg:w-[50%] lg:gap-20">
          <div className="flex flex-col gap-2">
            <div>
              <h2>Victory Okoye</h2>
              <h1>Web Developer</h1>
            </div>
            <p className="w-100 m-auto lg:m-0">I design and develop websites that solve real-world problems for businesses and individuals.</p>
            <a href="#projects"><button className="px-8 py-2 bg-brand text-white rounded-sm">View Projects</button></a>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <Stats/>
        </div>
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
    <div className="flex gap-10 justify-center lg:gap-1 lg:h-max lg:rounded-lg lg:w-max lg:overflow-hidden">
      <div className="flex flex-col gap-10 md:flex-row lg:gap-1">
        <div className="bg-white size-40 flex flex-col items-center justify-center rounded-lg lg:rounded-none lg:h-25 lg:w-45">
          <h1>{stats[0].value}</h1>
          <p className="small">{stats[0].text}</p>
        </div>
        <div className="bg-white size-40 flex flex-col items-center justify-center rounded-lg lg:rounded-none lg:h-25 lg:w-45">
          <h1>{stats[2].value}</h1>
          <p className="small">{stats[2].text}</p>
        </div>
      </div>
      <div className="flex items-center lg:h-max">
        <div className="bg-white size-40 flex flex-col items-center justify-center rounded-lg lg:rounded-none lg:h-25 lg:w-45">
          <h1>{stats[1].value}</h1>
          <p className="small">{stats[1].text}</p>
        </div>
      </div>
    </div>
  )
}