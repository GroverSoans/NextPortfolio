"use client";
import { useNavStore } from '@/store/navStore';
import { education } from '@/constants/education';
import EducationCard from '@/components/EducationCard';
import PageTransition from '@/components/pageTransition';
import { motion } from "framer-motion";
import Blob from '@/components/blob';
import Skills from '@/components/skills';

// Animation variants for content sections
const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function AboutPage() {
  // Get navigation state for responsive layout
  const isNavOpen = useNavStore((state) => state.isNavOpen);

  return (
    <PageTransition>
      <div className="bg-light-background min-h-screen overflow-y-auto">
        <Blob />
        <div className="container mx-auto py-8 relative z-10">
          <motion.div 
            variants={contentVariants}
            className="mb-1"
          >
            <h1 className="text-light-primary text-[150px] font-bold">
              ABOUT<span className="text-light-secondary">.</span>
            </h1>
          </motion.div>

          <div className={`transition-all duration-500 ${!isNavOpen ? 'pr-96' : 'pr-16'}`}>
            <motion.div 
              variants={contentVariants}
              className="grid md:grid-cols-2 gap-12"
            >
              <div className="space-y-6">
                <motion.h2 
                  variants={contentVariants}
                  className="text-2xl font-semibold text-light-primary"
                >
                  Who I Am
                </motion.h2>
                <motion.p 
                  variants={contentVariants}
                  className="text-light-primary leading-relaxed"
                >
                  I'm a full-stack developer driven by a passion for creating impactful digital experiences. Blending modern
                   web technologies with thoughtful design, I build intuitive, high-performance solutions that seamlessly
                    connect form and function.
                </motion.p>
                <motion.p 
                  variants={contentVariants}
                  className="text-light-primary leading-relaxed"
                >
                  When I'm not coding, I'm building personal projects, exploring emerging technologies, or finding new ways to improve my
                  craft—whether through hands-on experimentation or deep dives into documentation.
                </motion.p>
              </div>

              <Skills />
            </motion.div>

            <motion.div 
              variants={contentVariants}
              className="mt-20"
            >
              <motion.div 
                variants={contentVariants}
                className="mb-12"
              >
                <h1 className="text-light-primary text-6xl font-bold mb-2">
                  EDUCATION<span className="text-light-secondary">.</span>
                </h1>
              </motion.div>
              <div className="space-y-16">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={contentVariants}
                    custom={index}
                  >
                    <EducationCard {...edu} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}