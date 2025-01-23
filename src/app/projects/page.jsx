"use client";
import ProjectCard from "@/components/projectCard";


export default function Projects() {
  return (
    <div className="bg-light-background h-screen relative overflow-hidden">
      <div className="h-screen flex flex-col pl-20 pt-[30px]">
        <span className="text-light-primary text-6xl font-bold mb-2">
          PROJECTS<span className="text-light-secondary">.</span>
        </span>
        <p className="text-light-primary text-xl max-w-2xl">
          Here are some of my recent projects
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ProjectCard/>
      </div>
    </div>
  );
}