"use client";

import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavStore } from '@/store/navStore';
import PageTransition from '@/components/pageTransition';
import { motion } from "framer-motion";
import Blob from '@/components/blob';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function Contact() {
  const isNavOpen = useNavStore((state) => state.isNavOpen);
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <div className="bg-light-background min-h-screen overflow-y-auto">
        <Blob />
        <div className="container mx-auto py-8 px-6 relative z-10">
          <motion.div variants={contentVariants} className="mb-1">
            <h1 className="text-light-primary text-5xl md:text-[100px] lg:text-[150px] font-bold">
              CONTACT<span className="text-light-secondary">.</span>
            </h1>
          </motion.div>
          <div className={`transition-all duration-500 ${!isNavOpen ? 'lg:pr-96' : 'lg:pr-16'}`}>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-light-primary">Get in Touch</h2>
                <p className="text-light-primary leading-relaxed">
                I'm always open to new projects and opportunities! Whether you have a question or just want to connect,
                 feel free to reach out—I'd love to chat.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:groverpsoans@gmail.com"
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

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-light-primary">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-2 bg-white/50 border border-light-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-light-secondary text-light-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-light-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-2 bg-white/50 border border-light-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-light-secondary text-light-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-light-primary">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full p-2 bg-white/50 border border-light-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-light-secondary text-light-primary"
                  />
                </div>

                {success && (
                  <p className="text-green-500">Message sent successfully!</p>
                )}
                {error && (
                  <p className="text-red-500">Something went wrong. Please try again.</p>
                )}

                <Button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-light-primary hover:bg-light-secondary/90 text-white"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}