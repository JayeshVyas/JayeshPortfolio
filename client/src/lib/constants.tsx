export const PERSONAL_INFO = {
  name: "Jayesh Vyas",
  title: "Technical Team Lead • Solution Architect • Full-Stack Engineer",
  description: "I build scalable, cloud-native products and lead high-performing teams shipping with quality and speed.",
  email: "jayeshvyascs@gmail.com",
  phones: ["+91 8502074843", "+91 7976204815"],
  linkedin: "https://www.linkedin.com/in/jayeshvyas321/",
  github: "https://github.com/JayeshVyas",
  linktree: "https://linktr.ee/jayesh_vyas",
  resume: "/resume/Jayesh_Vyas_Resume.pdf"
};

export const KEY_METRICS = [
  { value: "10-14", label: "Engineers Led" },
  { value: "40%", label: "Faster Deployments" },
  { value: "10K+", label: "Devices Served" },
  { value: "2×", label: "Faster Onboarding" }
];

export const EXPERIENCE_DATA = [
  {
    period: "Apr 2025 – Present",
    title: "Full Stack Team Lead",
    company: "Zucitech",
    location: "Bangalore, India",
    description: "Solution Architect & Team Leadership",
    highlights: [
      "Lead 10–14 engineers through code reviews, mentoring, and sprint planning",
      "Designed in-house client onboarding platform → 2× faster onboarding, 35% fewer manual errors",
      "Solution architecture for insurance/healthcare microservices platforms",
      "Implemented quality gates and DevOps best practices"
    ],
    technologies: ["Java", "Go", "TypeScript", "React", "Angular", "AWS", "Docker", "CI/CD"],
    current: true
  },
  {
    period: "Dec 2022 – Mar 2025",
    title: "Senior Software Engineer",
    company: "Siemens",
    location: "Bangalore, India",
    description: "IEM & IED Device Platform Development",
    highlights: [
      "Designed/deployed Go + AWS microservices for energy device metrics",
      "Achieved 45% latency reduction, 40% faster deployments via CI/CD",
      "Built secure storage with backward compatibility for 10,000+ devices",
      "Implemented server power notifications & graceful shutdown queue APIs",
      "E2E ownership: requirements → testing → dashboards/alarms/monitors"
    ],
    technologies: ["Go", "Java", "Angular", "AWS", "NoSQL", "CI/CD"]
  },
  {
    period: "Oct 2017 – Nov 2022",
    title: "Senior Development Engineer",
    company: "Acnovate Technologies",
    location: "Bangalore, India",
    description: "Enterprise PLM & Analytics Platform",
    highlights: [
      "Delivered enterprise PLM applications (Java, AngularJS, MySQL, Oracle)",
      "Launched ETL pipelines and optimized high-performance queries",
      "Built Qiwk Lite dashboards with Bar/Pie charts from database analytics",
      "Led 5+ product launches engaging 15+ clients end-to-end",
      "Implemented A/B testing, Auto-Targeting, and Multivariate Testing capabilities"
    ],
    technologies: ["Java", "AngularJS", "MySQL", "Oracle", "ETL"]
  }
];

export const PROJECTS_DATA = [
  {
    id: "dine-fix",
    title: "DINE FIX",
    subtitle: "AI-powered ops for restaurants",
    description: "Problem: Fragmented restaurant operations across multiple systems. Solution: AI-driven unified platform with modern microservices architecture",
    status: "In Progress",
    technologies: ["AI", "Microservices", "React", "AWS"],
    icon: "🍽️",
    gradient: "from-primary/10 to-accent/10"
  },
  {
    id: "peerly",
    title: "PEERLY",
    subtitle: "Freemium peer knowledge network",
    description: "Goal: Enable knowledge sharing with premium monetization features. Focus: Community-driven learning and expertise exchange",
    status: "MVP Exploration",
    technologies: ["Platform", "React", "Node.js", "PostgreSQL"],
    icon: "🤝",
    gradient: "from-accent/10 to-primary/10"
  },
  {
    id: "energy-platform",
    title: "Energy Device Platform",
    subtitle: "Siemens IEM & IED Platform",
    description: "Microservices platform for energy device metrics ingestion and real-time dashboards. Impact: 45% latency reduction, 40% faster deployments, 10K+ devices served",
    status: "Production",
    technologies: ["Go", "AWS", "Microservices", "Angular"],
    icon: "⚡",
    gradient: "from-primary/10 to-muted/20",
    enterprise: true
  },
  {
    id: "onboarding-platform",
    title: "Client Onboarding Platform",
    subtitle: "Insurance/Healthcare Onboarding",
    description: "Automated client onboarding workflows for insurance and healthcare sectors. Impact: 2× faster onboarding, 35% reduction in manual errors",
    status: "Production",
    technologies: ["Java", "React", "AWS", "Automation"],
    icon: "🏥",
    gradient: "from-accent/10 to-muted/20",
    enterprise: true
  }
];

export const SKILLS_DATA = {
  languages: [
    { name: "Java", proficiency: 95, category: "backend" },
    { name: "Golang", proficiency: 90, category: "backend" },
    { name: "TypeScript", proficiency: 90, category: "backend frontend" },
    { name: "JavaScript", proficiency: 95, category: "backend frontend" },
    { name: "SQL", proficiency: 85, category: "backend" }
  ],
  frameworks: [
    { name: "Spring Boot", proficiency: 90, category: "backend" },
    { name: "React", proficiency: 90, category: "frontend" },
    { name: "Angular", proficiency: 85, category: "frontend" },
    { name: "Node.js", proficiency: 80, category: "backend" },
    { name: "Hibernate", proficiency: 85, category: "backend" }
  ],
  cloud: [
    { name: "AWS", proficiency: 90, category: "cloud" },
    { name: "Docker", proficiency: 85, category: "cloud" },
    { name: "CI/CD", proficiency: 90, category: "cloud" },
    { name: "Oracle Cloud", proficiency: 75, category: "cloud" },
    { name: "Jenkins", proficiency: 80, category: "cloud" }
  ],
  ai: [
    { name: "Prompt Engineering", proficiency: 80, category: "ai" },
    { name: "LLMs", proficiency: 75, category: "ai" },
    { name: "Agent Systems", proficiency: 70, category: "ai" },
    { name: "Gen-AI Tools", proficiency: 85, category: "ai" }
  ],
  core: [
    { name: "Microservices", proficiency: 95, category: "backend" },
    { name: "System Design", proficiency: 90, category: "backend" },
    { name: "Team Leadership", proficiency: 95, category: "soft" },
    { name: "DSA", proficiency: 85, category: "backend" }
  ],
  tools: [
    { name: "Git", proficiency: 95, category: "cloud" },
    { name: "JIRA", proficiency: 90, category: "cloud" },
    { name: "Postman", proficiency: 90, category: "cloud" },
    { name: "Swagger", proficiency: 85, category: "cloud" }
  ]
};

export const ACHIEVEMENTS = [
  {
    title: "Smart India Hackathon",
    subtitle: "Finalist 2016",
    icon: "🏆"
  },
  {
    title: "IIM Udaipur Prarambh",
    subtitle: "Startup Pitch 2014",
    icon: "💡"
  },
  {
    title: "State Chess Under-19",
    subtitle: "Selection 2010",
    icon: "♟️"
  }
];
