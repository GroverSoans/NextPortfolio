"use client";
import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  return (
    <div className="bg-light-background min-h-screen overflow-y-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-light-primary text-6xl font-bold mb-2">
            PROJECTS<span className="text-light-secondary">.</span>
          </h1>
          <p className="text-light-primary text-xl max-w-2xl">Here are some of my recent projects</p>
        </div>
        <div className="space-y-12">
        <div className="space-y-16 pr-8">
          <ProjectCard
            title="Modern Web Application"
            description="A full-stack application built with Next.js, featuring real-time updates, server-side rendering, and a modern user interface. Implements the latest web development practices and performance optimizations."
            imageUrl="/placeholder.svg?height=600&width=800"
            githubUrl="https://github.com/yourusername/your-repo"
            tags={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
          />
          <ProjectCard
            title="AI-Powered Platform"
            description="An innovative platform that leverages artificial intelligence to provide personalized recommendations and insights. Built with scalability and user experience in mind."
            imageUrl="/placeholder.svg?height=600&width=800"
            githubUrl="https://github.com/yourusername/another-repo"
            imageOnRight={true}
            tags={["AI/ML", "Python", "React", "AWS"]}
          />
        </div>
        </div>
      </div>
    </div>
  )
}
