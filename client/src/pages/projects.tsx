import { useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS_DATA } from "@/lib/constants";

export default function Projects() {
  useEffect(() => {
    document.title = "Projects - Jayesh Vyas";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20" data-testid="projects-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing enterprise solutions, microservices architecture, and innovative platforms.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {PROJECTS_DATA.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  status={project.status}
                  technologies={project.technologies}
                  icon={project.icon}
                  gradient={project.gradient}
                  enterprise={project.enterprise}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
