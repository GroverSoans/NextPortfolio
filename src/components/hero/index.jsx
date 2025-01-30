"use client";
import Clock from "@/components/clock";


export default function Hero() {
  return (
    <div className="fixed top-0 left-0 w-full">
      <header className="w-full p-4 md:p-8 -mt-1 md:mt-0">
        <div className="relative w-full">
          <div className="absolute inset-0 bg-light-primary rounded-full" />
          <div className="flex items-center relative z-10 px-6 md:px-12 py-4 md:py-6">
            <h1 className="text-white text-base md:text-xl font-bold whitespace-nowrap">
              by Grover Soans<span className="text-light-secondary">™</span>
            </h1>
            <h2 className="hidden md:flex text-white text-xl font-bold flex-1 justify-center">
              <Clock/>
            </h2>
            <div className="w-[140px] hidden md:block" />
          </div>
        </div>
      </header>
    </div>
  );
}
