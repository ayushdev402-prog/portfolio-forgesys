export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  projectReference: string;
  isConfidential: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-01",
    quote:
      "Working with Kinetic felt like having a staff engineering team inside our building from day one. They anticipated our multi-channel routing bottlenecks before they became customer-facing issues and delivered a rock-solid platform that hasn't missed a single beat during quarterly volatility.",
    author: "Confidential VP of Engineering",
    role: "VP of Engineering",
    company: "Tier-1 Financial Market Publisher",
    projectReference: "Enterprise Content Distribution Platform",
    isConfidential: true
  },
  {
    id: "test-02",
    quote:
      "Most agencies pitch trendy AI gimmicks that fall apart in production. Kinetic did the opposite: they built a disciplined vector pipeline and deterministic fallback system that actually converted real shoppers and reduced our support burden by over 50%.",
    author: "Founder & CEO",
    role: "Founder & CEO",
    company: "DTC Apparel & Performance Gear",
    projectReference: "AI-Powered Ecommerce Platform",
    isConfidential: true
  },
  {
    id: "test-03",
    quote:
      "They took three disjointed legacy systems that were bleeding 30 hours of manual reconciliation every week and replaced them with an automated, self-healing pipeline. Their communication was crisp, technical, and refreshingly devoid of fluff.",
    author: "Head of Operations",
    role: "Head of Operations",
    company: "B2B Logistics & Fleet Management",
    projectReference: "Business Automation Platform",
    isConfidential: true
  }
];
