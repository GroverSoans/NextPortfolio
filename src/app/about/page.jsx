"use client";

export default function About() {
  return (
    <div className="bg-light-background h-screen relative overflow-hidden">
      <div className="h-screen flex flex-col justify-center pl-20 pb-20">
        <span className="text-light-primary text-6xl font-bold mb-4">
          ABOUT<span className="text-light-secondary">.</span>
        </span>
        <p className="text-light-primary text-xl max-w-2xl">
          Learn more about me and my journey
        </p>
      </div>
    </div>
  );
}