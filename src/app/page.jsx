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

  return (
    <PageTransition>
      <div className="bg-light-background/5 min-h-screen relative overflow-hidden">
        <Blob />
        <Hero />
        <div className={`transition-all duration-500 ${!isNavOpen ? 'lg:pr-96' : 'pr-16'}`}>
          <div className="h-screen flex flex-col justify-center px-6 md:pl-20 pb-32 z-30">
            <span className="text-light-primary text-5xl md:text-[100px] lg:text-[150px] font-bold relative z-10">
              HELLO<span className="text-light-secondary">.</span>
            </span>
            <p className="text-light-primary text-lg md:text-xl lg:text-2xl max-w-2xl relative z-10 mb-8">
              Hi, I'm Grover Soans, a full-stack developer passionate about building modern, scalable web applications.
            </p>
            <Button 
              onClick={() => window.open('/resume/GroverSoansResumeUpdated.pdf', '_blank')}
              className="relative z-10 w-fit flex items-center gap-2 bg-light-primary hover:bg-light-secondary text-white"
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
