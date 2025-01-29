"use client";
import { useNavStore } from '@/store/navStore';
import PageTransition from '@/components/pageTransition';
import { motion } from "framer-motion";
import Hero from "@/components/hero";
import InfiniteTextScroll from "@/components/infiniteTextScroll";

const contentVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function Home() {
  const isNavOpen = useNavStore((state) => state.isNavOpen);

  return (
    <PageTransition>
      <div className="bg-light-background h-screen relative overflow-hidden">
        <Hero />
        <div className={`transition-all duration-500 ${!isNavOpen ? 'pr-96' : 'pr-16'}`}>
          <div className="h-screen flex flex-col justify-center pl-20 pb-20 z-30">
            <span className="text-light-primary text-6xl font-bold mb-4">
              HELLO<span className="text-light-secondary">.</span>
            </span>
            <p className="text-light-primary text-xl max-w-2xl">
              My name is grover soans and i am a full stack developer that specializes in web development
            </p>
          </div>
          <div className="absolute bottom-0 w-full">
            <InfiniteTextScroll />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
