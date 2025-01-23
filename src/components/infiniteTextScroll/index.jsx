'use client'

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function InfiniteTextScroll() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  const animation = () => {
    if(xPercent <= -100) {
      xPercent = 0;
    }
    if(xPercent > 0) {
      xPercent = -100;
    }
    
    gsap.set(firstText.current, {xPercent: xPercent});
    gsap.set(secondText.current, {xPercent: xPercent});
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  }

  return (
    <main className="relative flex h-screen mb-screen overflow-hidden cursor-default z-10">
      <div className="absolute top-[calc(100vh-350px)]">
        <div className="relative whitespace-nowrap">
          <p ref={firstText} className="relative m-0 text-light-primary text-[230px] font-bold pr-[50px] select-none">
            Software Developer -
          </p>
          <p ref={secondText} className="absolute left-full top-0 m-0 text-light-primary text-[230px] font-bold pr-[50px] select-none">
            Software Developer -
          </p>
        </div>
      </div>
    </main>
  )
}
