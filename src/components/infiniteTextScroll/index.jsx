'use client'

import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function InfiniteTextScroll() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const animationRef = useRef(null);
  const xPercentRef = useRef(0);
  const direction = -1;

  useEffect(() => {
    let isMounted = true;

    const animation = () => {
      if (!isMounted) return;

      const first = firstText.current;
      const second = secondText.current;

      if (!first || !second) return;

      if (xPercentRef.current <= -100) {
        xPercentRef.current = 0;
      }
      if (xPercentRef.current > 0) {
        xPercentRef.current = -100;
      }
      
      try {
        gsap.set(first, { xPercent: xPercentRef.current });
        gsap.set(second, { xPercent: xPercentRef.current });
        xPercentRef.current += 0.1 * direction;
        animationRef.current = requestAnimationFrame(animation);
      } catch (error) {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      }
    };

    animationRef.current = requestAnimationFrame(animation);

    return () => {
      isMounted = false;
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

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
  );
}
