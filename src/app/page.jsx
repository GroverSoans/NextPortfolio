"use client";
import InfiniteTextScroll from "@/components/infiniteTextScroll";
import Clock from "@/components/clock";

export default function Home() {
  return (
    <div className="bg-black">
      <header className="w-full">
        <h1 className="text-white fixed left-0 z-20 p-[30px] text-xl font-bold">by Grover Soans<span className="text-pink-500">™</span></h1>
        <Clock className="flex justify-center"/>
      </header>
      <InfiniteTextScroll />
    </div>
  );
}
