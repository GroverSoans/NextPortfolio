"use client";
import Clock from "@/components/clock";
import Tree from "@/components/tree";

export default function Hero() {
  return (
    <div className="">
      <header className="w-full fixed">
        <h1 className="text-light-primary fixed left-0 pl-20 pt-[30px] text-xl font-bold">
          by Grover Soans<span className="text-light-secondary">™</span>
        </h1>
        <h2 className="text-light-primary w-full text-center p-[30px] text-xl font-bold">
          <Clock/>
        </h2>
      </header>
      <div>
        {/* <Tree/> */}
      </div>
    </div>
  );
}
