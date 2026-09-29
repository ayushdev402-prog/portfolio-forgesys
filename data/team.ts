export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  technologies: string[];
  bio: string;
  linkedin: string;
  github: string;
  location: string;
}

export const teamData: TeamMember[] = [
  {
    id: "ayush",
    name: "Ayush",
    role: "Co-Founder / Backend, Systems & AI",
    specialization: ".NET 8 · C# · Node.js · Python · PostgreSQL · Redis · Cloud Architecture",
    technologies: [".NET 8", "C#", "Node.js", "Python", "PostgreSQL", "Redis", "AWS", "FastAPI"],
    bio: "Systems architect and backend engineer specializing in high-throughput data pipelines, microservices, and AI integrations. Focused on building zero-overhead, deterministic software that operates with high reliability under real load.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    location: "Bangalore, India"
  },
  {
    id: "saad",
    name: "Saad",
    role: "Co-Founder / Full-Stack & UI Architecture",
    specialization: "React 19 · Next.js · TypeScript · Distributed Systems · Cloud Infra",
    technologies: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Docker", "AWS", "GraphQL"],
    bio: "Full-stack engineer with an obsession for clean product design, responsive architecture, and bulletproof user interfaces. Builds dense, high-performance web systems and frontend applications that feel instantaneous.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    location: "Bangalore, India"
  }
];

export const studioTenets = [
  {
    num: "01",
    title: "Two Dedicated Builders",
    desc: "Every line of code and architectural decision is crafted directly by Ayush and Saad. No dilution, no subcontractors."
  },
  {
    num: "02",
    title: "Production Reality Over Fluff",
    desc: "We focus on building functional, tested, secure software that delivers actual business leverage rather than endless slide decks."
  },
  {
    num: "03",
    title: "Clean, Strongly-Typed Systems",
    desc: "Maintainability is our highest standard. We build using strict TypeScript, robust data models, and well-documented API contracts."
  },
  {
    num: "04",
    title: "Transparent & Direct Communication",
    desc: "You have direct access to us on Slack/Discord with daily async progress updates and weekly working demos."
  }
];
