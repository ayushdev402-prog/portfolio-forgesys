export interface CompanyMetric {
  value: string;
  label: string;
  subtext?: string;
}

export interface CurrentlyBuildingItem {
  id: string;
  number: string;
  name: string;
  category: string;
  status: "IN PRODUCTION" | "IN DEVELOPMENT" | "EXPERIMENTAL";
  description: string;
}

export interface TechLogo {
  name: string;
  category: string;
  tag: string;
}

export interface CompanyInfo {
  name: string;
  displayName: string;
  brandPrefix: string;
  tagline: string;
  heroTag: string;
  heroHeadline: string[];
  heroSubheadline: string;
  email: string;
  phone: string;
  location: string;
  city: string;
  country: string;
  timezone: string;
  foundedYear: string;
  socials: {
    github: string;
    linkedin: string;
    x: string;
  };
  metrics: CompanyMetric[];
  techLogos: TechLogo[];
  currentlyBuilding: CurrentlyBuildingItem[];
  whyWorkWithUs: {
    title: string;
    subtitle: string;
    points: {
      title: string;
      description: string;
    }[];
  };
}

export const companyData: CompanyInfo = {
  name: "forgesys",
  displayName: "forgesys",
  brandPrefix: "/",
  tagline: "Software & Systems Engineering Studio",
  heroTag: "ENGINEERING / SYSTEMS / ARCHITECTURE",
  heroHeadline: [
    "WE BUILD",
    "THINGS THAT",
    "SHOULD EXIST."
  ],
  heroSubheadline:
    "A two-engineer software team led by Ayush and Saad. We architect and build production-grade web platforms, distributed backends, AI systems, and high-throughput automation.",
  email: "hello@forgesys.dev",
  phone: "+91 98765 43210",
  location: "Bangalore, India",
  city: "Bangalore",
  country: "India",
  timezone: "IST (UTC+5:30)",
  foundedYear: "2024",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    x: "https://x.com",
  },
  metrics: [
    {
      value: "12",
      label: "PROJECTS DELIVERED",
      subtext: "Production web, API, and cloud architectures"
    },
    {
      value: "7",
      label: "CLIENTS PARTNERED WITH",
      subtext: "Founders, operators, and enterprise teams"
    },
    {
      value: "4",
      label: "CORE DOMAINS",
      subtext: "Fintech, commerce, automation & cloud systems"
    },
    {
      value: "100%",
      label: "ENGINEER-LED",
      subtext: "Direct work with Ayush & Saad on every commit"
    }
  ],
  techLogos: [
    { name: "AWS Cloud", category: "Cloud & Infra", tag: "AWS" },
    { name: ".NET Core", category: "Backend Runtime", tag: ".NET 8" },
    { name: "React 19", category: "Frontend Engine", tag: "React" },
    { name: "Next.js", category: "Fullstack Framework", tag: "Next.js" },
    { name: "PostgreSQL", category: "Relational DB", tag: "Postgres" },
    { name: "Redis", category: "In-Memory Stream", tag: "Redis" },
    { name: "FastAPI", category: "Async Python", tag: "FastAPI" },
    { name: "Docker", category: "Containers", tag: "Docker" },
    { name: "TypeScript", category: "Type Safety", tag: "TypeScript" }
  ],
  currentlyBuilding: [
    {
      id: "cb-01",
      number: "01",
      name: "Enterprise Content Distribution Mesh",
      category: "High-Throughput Platform",
      status: "IN PRODUCTION",
      description: "Low-latency financial publication engine handling multi-channel syndication."
    },
    {
      id: "cb-02",
      number: "02",
      name: "AI Autonomous Operations Engine",
      category: "AI & Workflow Automation",
      status: "IN DEVELOPMENT",
      description: "Vector discovery and autonomous document reconciliation for logistics."
    },
    {
      id: "cb-03",
      number: "03",
      name: "Telemetry & Performance Profiler",
      category: "Internal Tooling",
      status: "EXPERIMENTAL",
      description: "Hardware-accelerated 60fps time-series metric scrubber for microservices."
    }
  ],
  whyWorkWithUs: {
    title: "Why work with us?",
    subtitle: "Direct technical collaboration with zero management overhead.",
    points: [
      {
        title: "Direct Access to Ayush & Saad",
        description: "No project managers, account reps, or junior freelancers. You work directly with the two engineers building your product."
      },
      {
        title: "Clean, Maintainable Production Code",
        description: "Strictly typed, thoroughly documented, and structured for effortless long-term ownership by your internal team."
      },
      {
        title: "Rapid Iteration & Transparent Timelines",
        description: "Weekly milestone demos, shared GitHub repositories, and clear communication with zero surprises."
      },
      {
        title: "Reliability & Performance First",
        description: "We build for real-world traffic, high availability, and deterministic data integrity."
      }
    ]
  }
};
