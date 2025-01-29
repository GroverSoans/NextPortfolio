"use client";

import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavStore } from '@/store/navStore';
import PageTransition from '@/components/pageTransition';
import { motion } from "framer-motion";
import Blob from '@/components/blob';

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function Contact() {
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
              CONTACT<span className="text-light-secondary">.</span>
            </h1>

          </motion.div>
          <div className={`transition-all duration-500 ${!isNavOpen ? 'pr-96' : 'pr-16'}`}>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-light-primary">Get in Touch</h2>
                <p className="text-light-primary leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
                  want to say hi, feel free to reach out!
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:groverpsoans@gmail.com.com"
                    className="flex items-center gap-2 text-light-primary hover:text-light-secondary"
                  >
                    <Mail className="w-5 h-5" />
                    groverpsoans@gmail.com
                  </a>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="text-light-primary border-light-primary hover:text-light-secondary">
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon" className="text-light-primary border-light-primary hover:text-light-secondary">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-light-primary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 bg-white/50 border border-light-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-light-secondary text-light-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-light-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 bg-white/50 border border-light-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-light-secondary text-light-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-light-primary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full p-2 bg-white/50 border border-light-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-light-secondary text-light-primary"
                  />
                </div>

                <Button className="w-full bg-light-primary hover:bg-light-secondary/90 text-white">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}