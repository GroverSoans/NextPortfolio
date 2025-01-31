"use client";
import { motion } from "framer-motion";
import { skillsData } from "@/constants/skills";

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

const SkillCard = ({ title, skills }) => (
  <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border-2 border-light-primary/10 hover:border-light-secondary transition-colors duration-300">
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h3 className="font-medium text-light-secondary text-lg">{title}</h3>
      </div>
      <ul className="space-y-2 text-light-primary/80">
        {skills.map((skill, index) => (
          <motion.li key={index} variants={contentVariants}>
            <a 
              href={skill.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-light-secondary transition-colors"
            >
              <span className="text-light-secondary">&gt;</span>{skill.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Skills() {
  return (
    <motion.div variants={contentVariants} className="space-y-8">
      <h2 className="text-2xl font-semibold text-light-primary">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        <SkillCard {...skillsData.frontend} />
        <SkillCard {...skillsData.backend} />
        <SkillCard {...skillsData.tools} />
      </div>
    </motion.div>
  );
} 