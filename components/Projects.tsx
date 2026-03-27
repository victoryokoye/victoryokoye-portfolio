
export default function Projects() {
  const projects = [
    {
      id: 1,
      imageLink: "",
      title: "Football Analysis Dashboard",
      description: "A real-time football analytics platform that tracks player performance, match stats, and team comparisons with interactive charts.",
      problem: "Football fans and analysts lack a simple platform to visualize player and team performance data in one place.",
      solution: "Built a responsive dash board with dynamic charts and filtering to analyze players, teams, and match stats instantly.",
      tools: ["Next.js", "Typescript", "Tailwind CSS", "Chart.js"],
      features: [
        "Real-time stats filtering",
        "Player comparison tool",
        "Interactive charts and graphs",
        "Mobile-responsive dashboard"
      ],
      impact: "Improved data load speed by 40% and created a smooth user experience for analyzing complex football data.",
      pageLink: ""
    },
    {
      id: 2,
      imageLink: "",
      title: "Football Analysis Dashboard",
      description: "A real-time football analytics platform that tracks player performance, match stats, and team comparisons with interactive charts.",
      problem: "Football fans and analysts lack a simple platform to visualize player and team performance data in one place.",
      solution: "Built a responsive dash board with dynamic charts and filtering to analyze players, teams, and match stats instantly.",
      tools: ["Next.js", "Typescript", "Tailwind CSS", "Chart.js"],
      features: [
        "Real-time stats filtering",
        "Player comparison tool",
        "Interactive charts and graphs",
        "Mobile-responsive dashboard"
      ],
      impact: "Improved data load speed by 40% and created a smooth user experience for analyzing complex football data.",
      pageLink: ""
    },
    {
      id: 3,
      imageLink: "",
      title: "Football Analysis Dashboard",
      description: "A real-time football analytics platform that tracks player performance, match stats, and team comparisons with interactive charts.",
      problem: "Football fans and analysts lack a simple platform to visualize player and team performance data in one place.",
      solution: "Built a responsive dash board with dynamic charts and filtering to analyze players, teams, and match stats instantly.",
      tools: ["Next.js", "Typescript", "Tailwind CSS", "Chart.js"],
      features: [
        "Real-time stats filtering",
        "Player comparison tool",
        "Interactive charts and graphs",
        "Mobile-responsive dashboard"
      ],
      impact: "Improved data load speed by 40% and created a smooth user experience for analyzing complex football data.",
      pageLink: ""
    }
  ]
  return (
    <>
      <section className="bg-white p-4 flex flex-col">
        <h2>My{" "}<span className="text-blue-500">Projects</span></h2>
        <div className="flex flex-col gap-10 p-2">
          {
            projects.map(project => (
              <div key={project.id} className="border border-gray-400 rounded-lg">
                <div className="bg-gray-200 h-40"></div>
                <div className="p-4 flex flex-col gap-1">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>{project.problem}</p>
                  <p>{project.solution}</p>
                  <ul className="flex flex-wrap gap-1">
                    {
                      project.tools.map((tool, index) => (
                        <li key={index} className="bg-blue-500 text-white rounded-full px-2">{tool}</li>
                      ))
                    }
                  </ul>
                  <ul>
                    {
                      project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))
                    }
                  </ul>
                  <p>{project.solution}</p>
                  <button className="bg-blue-500 h-10 w-full rounded-sm text-white">Visit Site</button>
                </div>
                
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
};