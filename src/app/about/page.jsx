"use client";
import { useNavStore } from '@/store/navStore';
import { education } from '@/constants/education';
import EducationCard from '@/components/EducationCard';
import PageTransition from '@/components/pageTransition';
import { motion } from "framer-motion";
import Blob from '@/components/blob';

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
                  I'm a full-stack developer passionate about building digital experiences that make a difference. With
                  expertise in modern web technologies and a keen eye for design, I create solutions that are both functional
                  and beautiful.
                </motion.p>
                <motion.p 
                  variants={contentVariants}
                  className="text-light-primary leading-relaxed"
                >
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
                  sharing my knowledge through technical writing and mentoring.
                </motion.p>
              </div>

              <motion.div 
                variants={contentVariants}
                className="space-y-6"
              >
                <h2 className="text-2xl font-semibold text-light-primary">My Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="font-medium text-light-primary">Frontend</h3>
                    <ul className="space-y-1 text-light-primary">
                      <motion.li variants={contentVariants}>React</motion.li>
                      <motion.li variants={contentVariants}>Next.js</motion.li>
                      <motion.li variants={contentVariants}>TypeScript</motion.li>
                      <motion.li variants={contentVariants}>Tailwind CSS</motion.li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium text-light-primary">Backend</h3>
                    <ul className="space-y-1 text-light-primary">
                      <motion.li variants={contentVariants}>Node.js</motion.li>
                      <motion.li variants={contentVariants}>Python</motion.li>
                      <motion.li variants={contentVariants}>GraphQL</motion.li>
                      <motion.li variants={contentVariants}>PostgreSQL</motion.li>
                    </ul>
                  </div>
                </div>
              </motion.div>
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