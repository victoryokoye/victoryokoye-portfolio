
export default function Services() {
  const services = [
    {
      id: 1,
      title: "Front-End Web Development",
      description: "A real-time football analytics platform that tracks player performance, match stats, and team comparisons with interactive charts."
    },
    {
      id: 2,
      title: "Web design",
      description: "A real-time football analytics platform that tracks player performance, match stats, and team comparisons with interactive charts."
    },
    {
      id: 3,
      title: "Back-End Web Development",
      description: "A real-time football analytics platform that tracks player performance, match stats, and team comparisons with interactive charts."
    }
  ]
  return (
    <>
      <section className="flex flex-col gap-8 py-10">
        <div className="p-4">
          <h2><span className="text-blue-500">Services</span>{" "}I Offer</h2>
          <div className="flex gap-2 p-2">
            <div className="flex flex-col gap-8">
              <div key={services[0].id}>
                <h4>{services[0].title}</h4>
                <p>{services[0].description}</p>
              </div>
              <div key={services[2].id}>
                <h4>{services[2].title}</h4>
                <p>{services[2].description}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div key={services[1].id}>
                <h4>{services[1].title}</h4>
                <p>{services[1].description}</p>
              </div>
            </div>
          </div>
        </div>
        <TechStack/>
      </section>
    </>
  );
};

function TechStack() {
  const techStack = [
    {
      id: 1,
      name: "HTML",
      icon: null
    },
    {
      id: 2,
      name: "CSS",
      icon: null
    },
    {
      id: 3,
      name: "Javascript",
      icon: null
    },
    {
      id: 4,
      name: "Tailwind CSS",
      icon: null
    },
    {
      id: 5,
      name: "React",
      icon: null
    },
    {
      id: 6,
      name: "Next.js",
      icon: null
    },
    {
      id: 7,
      name: "Figma",
      icon: null
    },
    {
      id: 8,
      name: "S.E.O",
      icon: null
    },
    {
      id: 9,
      name: "Adobe Illustrator",
      icon: null
    }
  ]

  const duplicatedTechStack = [...techStack, ...techStack];

  return(
    <div className="overflow-hidden w-full">
      <ul className="flex animate-scroll gap-5">
        {
          duplicatedTechStack.map((tech, i) => (
            <li key={i} className="border border-gray-400 bg-blue-800 p-3 rounded-full">
              <h4>{tech.name}</h4>
            </li>
          ))
        }
      </ul>
    </div>
    
  )
}