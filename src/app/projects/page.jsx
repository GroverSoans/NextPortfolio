"use client";
import ProjectCard from "@/components/projectCard"
import { useNavStore } from '@/store/navStore';
import { projects } from '@/constants/projects';
import PageTransition from '@/components/pageTransition';
import { motion } from "framer-motion";
import Blob from '@/components/blob';

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function Projects() {
  const isNavOpen = useNavStore((state) => state.isNavOpen);

  return (
    <PageTransition>
      <div className="bg-light-background min-h-screen overflow-y-auto">
        <Blob />
        <div className="container mx-auto py-8 px-6 relative z-10">
          <motion.div variants={contentVariants} className="mb-1">
            <h1 className="text-light-primary text-5xl md:text-[100px] lg:text-[150px] font-bold">
              PROJECTS<span className="text-light-secondary">.</span>
            </h1>
          </motion.div>
          <div className="space-y-8 md:space-y-12">
            <div className={`space-y-8 md:space-y-16 transition-all duration-500 ${!isNavOpen ? 'lg:pr-96' : 'lg:pr-16'}`}>
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
