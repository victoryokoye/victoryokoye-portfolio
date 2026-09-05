export interface Project {
  id: number;
  imageLink: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  tools: string[];
  features: string[];
  impact: string;
  pageLink: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    imageLink: "/projects/focus-sentry.jpg",
    title: "Focus Sentry — Productivity PWA",
    description:
      "An offline-first productivity app for managing focus sessions, habits, and tasks.",
    problem:
      "Users struggle to stay focused and keep their tasks and habits organized, especially when internet access is unreliable.",
    solution:
      "Built a responsive PWA that lets users manage their focus, habits, and tasks offline, then syncs their data when they reconnect.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Dexie", "Supabase"],
    features: [
      "Offline-first functionality",
      "Focus session tracking",
      "Habit tracking",
      "Todo management",
      "Automatic data sync",
    ],
    impact:
      "Helps users stay productive and maintain access to their data regardless of connectivity.",
    pageLink: "https://focus-sentry.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    imageLink: "/projects/digitanotion.png",
    title: "Digitanotion — Corporate Website",
    description:
      "A modern corporate website showcasing Digitanotion’s tech services, solutions, and training programs.",
    problem:
      "Visitors needed a clear and engaging way to understand Digitanotion’s services, expertise, and opportunities.",
    solution:
      "Designed and built responsive interfaces that improved content clarity, navigation, and the overall user experience.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    features: [
      "Responsive UI design",
      "Modern landing pages",
      "Clear service navigation",
      "Interactive sections",
      "Mobile-friendly experience",
    ],
    impact:
      "Helped create a professional digital presence that clearly communicates Digitanotion’s services and brand.",
    pageLink: "https://www.digitanotion.com.ng/",
    featured: true,
  },
  {
    id: 3,
    imageLink: "/projects/nextgen-tech.jpg",
    title: "NextGen Tech NGO — WordPress",
    description:
      "A responsive NGO website developed collaboratively as a school project using WordPress to establish a clear and professional online presence.",
    problem:
      " The project required a professional website to clearly communicate the organization's purpose and information.",
    solution:
      "Collaborated with a team to design and develop a responsive, well-structured website with intuitive navigation.",
    tools: ["WordPress", "Elementor", "CSS", "JavaScript"],
    features: [
      "Responsive website design",
      "Custom page layouts",
      "Organized content sections",
      "Mobile-friendly interface",
      "Intuitive navigation",
    ],
    impact:
      "Helped establish a professional digital presence while gaining practical experience in WordPress development and collaborative web development.",
    pageLink: "https://nextgentechngo.infinityfreeapp.com/",
    featured: true,
  },
  {
    id: 4,
    imageLink: "/projects/tic-tac-toe.jpg",
    title: "Tic Tac Toe — Interactive Web Game",
    description:
      "A responsive Tic Tac Toe game with AI and two-player modes, designed for quick and engaging gameplay.",
    problem:
      "Players need a simple and engaging way to enjoy Tic Tac Toe either against a computer or with another player, while keeping track of their results.",
    solution:
      "Built an interactive web game with dedicated AI and two-player modes, turn tracking, automatic win detection, score tracking, and quick game resets.",
    tools: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    features: [
      "Play against AI",
      "Two-player mode",
      "Win and draw detection",
      "Scoreboard tracking",
      "Game reset and replay",
      "Responsive interface",
    ],
    impact:
      "Provides a fun, responsive gaming experience while demonstrating interactive UI development, game logic, and browser-based state management.",
    pageLink: "https://victoryokoye.github.io/tictactoe/",
    featured: false,
  },
];

export function getFeaturedProjects(limit = 3): Project[] {
  const featured = projects.filter((p) => p.featured);
  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }
  const remaining = projects.filter((p) => !p.featured);
  return [...featured, ...remaining].slice(0, limit);
}

export function getAllProjects(): Project[] {
  return [...projects];
}
