
import { FiArrowRight } from "react-icons/fi";
import { FiCheckSquare } from "react-icons/fi";

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
      <section className="bg-white p-4 flex flex-col gap-8 pt-10 pb-15 lg:pt-20 lg:pb-25 lg:px-15">
        <h2 className="text-center">My{" "}<span className="text-brand">Projects</span></h2>
        <div className="grid gap-10 p-2 md:grid-cols-2 lg:grid-cols-3">
          {
            projects.map(project => (
              <div key={project.id} className="border border-border rounded-lg">
                <div className="bg-gray-200 h-40"></div>
                <div className="p-4 flex flex-col gap-1">
                  <h3>{project.title}</h3>
                  <p className="small">{project.description}</p>
                  <p className="small"><span className="color-text">Problem:</span>{" "}{project.problem}</p>
                  <p className="small"><span className="color-text">Solution:</span>{" "}{project.solution}</p>
                  <ul className="flex flex-wrap gap-1">
                    {
                      project.tools.map((tool, index) => (
                        <li key={index} className="bg-brand text-white rounded-full small px-2">{tool}</li>
                      ))
                    }
                  </ul>
                  <ul>
                    {
                      project.features.map((feature, index) => (
                        <li key={index} className="small flex gap-1 items-center"><FiCheckSquare className="text-brand"/>{feature}</li>
                      ))
                    }
                  </ul>
                  <p className="small"><span className="color-text">Impact:</span>{" "}{project.impact}</p>
                  <button className="bg-brand h-10 w-full rounded-sm flex items-center justify-between px-4">Visit site<FiArrowRight className="text-lg"/></button>
                </div>
                
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
};