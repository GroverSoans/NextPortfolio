"use client";
import ProjectCard from "@/components/projectCard"
import { useNavStore } from '@/store/navStore';
import { projects } from '@/constants/projects';
import PageTransition from '@/components/pageTransition';
import { motion } from "framer-motion";

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function Projects() {
  const isNavOpen = useNavStore((state) => state.isNavOpen);

  return (
    <PageTransition>
      <div className="bg-light-background min-h-screen overflow-y-auto">
        <div className="container mx-auto py-8">
          <motion.div 
            variants={contentVariants}
            className="mb-12"
          >
            <h1 className="text-light-primary text-6xl font-bold mb-2">
              PROJECTS<span className="text-light-secondary">.</span>
            </h1>
            <p className="text-light-primary text-xl max-w-2xl">Here are some of my recent projects</p>
          </motion.div>
          <div className="space-y-12">
            <div className={`space-y-16 transition-all duration-500 ${!isNavOpen ? 'pr-96' : 'pr-16'}`}>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={contentVariants}
                  custom={index}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
