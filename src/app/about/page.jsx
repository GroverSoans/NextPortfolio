"use client";
import { useNavStore } from '@/store/navStore';

export default function AboutPage() {
  const isNavOpen = useNavStore((state) => state.isNavOpen);

  return (
    <div className="bg-light-background min-h-screen overflow-y-auto">
      <div className="container mx-auto py-8">
        <div className="mb-12">
          <h1 className="text-light-primary text-6xl font-bold mb-2">
            ABOUT<span className="text-light-secondary">.</span>
          </h1>
          <p className="text-light-primary text-xl max-w-2xl">Get to know more about me and what I do</p>
        </div>

        <div className={`transition-all duration-500 ${!isNavOpen ? 'pr-96' : 'pr-16'}`}>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-light-primary">Who I Am</h2>
              <p className="text-light-primary leading-relaxed">
                I'm a full-stack developer passionate about building digital experiences that make a difference. With
                expertise in modern web technologies and a keen eye for design, I create solutions that are both functional
                and beautiful.
              </p>
              <p className="text-light-primary leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
                sharing my knowledge through technical writing and mentoring.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-light-primary">My Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-light-primary">Frontend</h3>
                  <ul className="space-y-1 text-light-primary">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-light-primary">Backend</h3>
                  <ul className="space-y-1 text-light-primary">
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>GraphQL</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}