"use client";
import Hero from "@/components/hero";
import InfiniteTextScroll from "@/components/infiniteTextScroll";

export default function Home() {
  return (
    <div className="bg-light-background h-screen relative overflow-hidden">
      <Hero/>
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
  );
}
