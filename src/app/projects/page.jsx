"use client";
import ProjectCard from "@/components/ProjectCard"
import { useNavStore } from '@/store/navStore';
import { projects } from '@/constants/projects';
import Hero from "@/components/hero";

export default function Projects() {
  const isNavOpen = useNavStore((state) => state.isNavOpen);

  return (
    <div className="bg-light-background min-h-screen overflow-y-auto ">
      {/* <Hero /> */}
      <div className="container mx-auto py-8">
        <div className="mb-12">
          <h1 className="text-light-primary text-6xl font-bold mb-2">
            PROJECTS<span className="text-light-secondary">.</span>
          </h1>
          <p className="text-light-primary text-xl max-w-2xl">Here are some of my recent projects</p>
        </div>
        <div className="space-y-12">
          <div className={`space-y-16 transition-all duration-500 ${!isNavOpen ? 'pr-96' : 'pr-16'}`}>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
