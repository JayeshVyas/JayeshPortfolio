import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SkillChip } from "@/components/skill-chip";
import { SKILLS_DATA, ACHIEVEMENTS } from "@/lib/constants";

const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "cloud", label: "Cloud & DevOps" },
  { id: "ai", label: "AI/ML" }
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    document.title = "Skills - Jayesh Vyas";
  }, []);

  const allSkills = [
    ...SKILLS_DATA.languages,
    ...SKILLS_DATA.frameworks,
    ...SKILLS_DATA.cloud,
    ...SKILLS_DATA.ai,
    ...SKILLS_DATA.core,
    ...SKILLS_DATA.tools
  ];

  const filteredSkills = activeFilter === "all" 
    ? allSkills 
    : allSkills.filter(skill => skill.category.includes(activeFilter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="py-20 bg-muted/50" data-testid="skills-section">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Skills & Technologies</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across the full technology stack, from frontend frameworks to cloud infrastructure.
            </p>
          </motion.div>
          
          {/* Skill Filters */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {skillCategories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.id)}
                data-testid={`filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </motion.div>
          
          {/* Skills Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeFilter} // Force re-animation when filter changes
          >
            {filteredSkills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <SkillChip
                  name={skill.name}
                  proficiency={skill.proficiency}
                  variant={skill.category.includes("backend") ? "primary" : "accent"}
                />
              </motion.div>
            ))}
          </motion.div>
          
          {/* Achievements */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl font-bold text-center mb-8">Achievements & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ACHIEVEMENTS.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="text-center p-4 bg-card rounded-lg border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  data-testid={`achievement-${achievement.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <div className="font-semibold">{achievement.title}</div>
                  <div className="text-sm text-muted-foreground">{achievement.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
