"use client";
import { useNavStore } from '@/store/navStore';
import PageTransition from '@/components/pageTransition';
import { motion } from "framer-motion";
import Hero from "@/components/hero";
import InfiniteTextScroll from "@/components/infiniteTextScroll";
import Blob from '@/components/blob';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function Home() {
  const isNavOpen = useNavStore((state) => state.isNavOpen);

  const handleDownload = () => {
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <PageTransition>
      <div className="bg-light-background/5 h-screen relative overflow-hidden">
        <Blob />
        <Hero />
        <div className={`transition-all duration-500 ${!isNavOpen ? 'pr-96' : 'pr-16'}`}>
          <div className="h-screen flex flex-col justify-center pl-20 pb-20 z-30">
            <span className="text-light-primary text-6xl font-bold mb-4 relative z-10">
              HELLO<span className="text-light-secondary">.</span>
            </span>
            <p className="text-light-primary text-xl max-w-2xl relative z-10 mb-8">
              My name is grover soans and i am a full stack developer that specializes in web development
            </p>
            <Button 
              onClick={handleDownload}
              className="relative z-10 w-fit flex items-center gap-2 bg-light-secondary hover:bg-light-secondary/90 text-white"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>
          <div className="absolute bottom-0 w-full">
            <InfiniteTextScroll />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
