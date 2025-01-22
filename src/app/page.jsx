"use client";
import InfiniteTextScroll from "@/components/infiniteTextScroll";
import Clock from "@/components/clock";

export default function Home() {
  return (
    <div className="bg-light-background h-screen relative overflow-hidden">
      <header className="w-full fixed">
        <h1 className="text-light-primary fixed left-0 z-20 p-[30px] text-xl font-bold">
          by Grover Soans<span className="text-light-secondary">™</span>
        </h1>
        <h2 className="text-light-primary w-full text-center p-[30px] text-xl font-bold">
          <Clock/>
        </h2>
      </header>
      <div className="h-screen flex flex-col justify-center pl-20 pb-20">
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
