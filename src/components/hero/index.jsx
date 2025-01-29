"use client";
import Clock from "@/components/clock";
import Tree from "@/components/tree";

export default function Hero() {
  return (
    <div className="fixed top-0 left-0 w-full">
      <header className="w-full p-8">
        <div className="relative w-full">
          <div className="absolute inset-0 bg-light-primary  opacity-40 rounded-full" />
          <div className="flex items-center relative z-10 px-12 py-6">
            <h1 className="text-light-primary text-xl font-bold whitespace-nowrap">
              by Grover Soans<span className="text-light-secondary">™</span>
            </h1>
            <h2 className="text-light-primary text-xl font-bold flex-1 text-center">
              <Clock/>
            </h2>
            <div className="w-[140px]" />
          </div>
        </div>
      </header>
      <div>
        {/* <Tree/> */}
      </div>
    </div>
  );
}
