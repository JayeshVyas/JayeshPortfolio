import { motion } from "framer-motion";

const services = [
  {
    category: "Core Development Services",
    items: [
      "Web Application Development (Full-stack: Java/Spring Boot + Angular/React, REST APIs, HATEOAS, secure scalable apps)",
      "Mobile App Development (Cross-platform apps using React Native / Flutter, or backend APIs for mobile)",
      "Microservices Development (designing, building, and deploying distributed services)",
      "Cloud-native Application Development (AWS, Lambda, CI/CD pipelines, containerization with Docker/Kubernetes)"
    ]
  },
  {
    category: "Architecture & Design",
    items: [
      "System Architecture & Design Consulting (scalable, high-performance architecture)",
      "Database Design & Optimization (SQL/NoSQL, schema design, indexing, query optimization)",
      "API Design & Integration (REST, GraphQL, third-party APIs)",
      "Performance & Scalability Reviews (code review, performance tuning, caching strategies)"
    ]
  },
  {
    category: "Consultancy & Advisory",
    items: [
      "Technology Consulting (selecting right tech stack, frameworks, tools for startups or enterprises)",
      "Project Roadmapping (guidance on timelines, resource allocation, milestones)",
      "Code Review & Best Practices Implementation",
      "Agile & DevOps Consulting (CI/CD pipelines, TDD/BDD, Git branching, release strategy)"
    ]
  },
  {
    category: "Mentoring & Training",
    items: [
      "Developer Mentorship (1:1 or team sessions on Java, Spring Boot, system design, DSA)",
      "Interview Preparation Coaching (mock interviews for Java/Spring/architecture roles)",
      "Corporate Training Sessions (Java, Spring Boot, Microservices, Clean Code, Design Patterns)"
    ]
  },
  {
    category: "Specialized Services",
    items: [
      "Product Development & MVP Building (end-to-end product from idea to launch)",
      "Automation Development (robot automation, Sidekiq workers, background jobs)",
      "Data Processing Pipelines (high-volume data handling, optimization, reporting)",
      "Admin Panel Development (custom dashboards, RBAC, reporting tools using Rails/ActiveAdmin or custom JS frameworks)",
      "Legacy Application Modernization (refactoring old apps to modern stack)"
    ]
  },
  {
    category: "Flexible Engagements",
    items: [
      "Part-time Technical Consultant",
      "Freelance/Contract Software Engineer",
      "Fractional CTO for Startups (helping early-stage companies set up tech strategy)"
    ]
  },
  {
    category: "Quality & AI Engineering",
    items: [
      "End-to-End Testing Services (manual + automation for web & mobile apps)",
      "Test Automation Framework Development (JUnit, TestNG, Selenium, Cypress, Playwright)",
      "Performance & Load Testing (JMeter, Gatling, k6)",
      "AI-powered Testing Solutions (intelligent test case generation, defect prediction, regression testing with AI tools)",
      "Continuous Testing in CI/CD (integrating automated tests into pipelines)",
      "Quality Audits & Best Practices (reviewing client’s test strategy, improving coverage & efficiency)"
    ]
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-muted/50" data-testid="services-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Services I Provide</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my full range of development, consulting, mentoring, and quality engineering services.
            </p>
          </motion.div>
          <div className="space-y-12">
            {services.map((section) => (
              <motion.div 
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-card p-8 rounded-xl border border-border shadow"
              >
                <h2 className="text-xl font-bold mb-4 text-primary">{section.category}</h2>
                <ul className="list-disc pl-6 space-y-2 text-left text-muted-foreground">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
