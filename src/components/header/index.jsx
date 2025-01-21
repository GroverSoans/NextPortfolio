'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from '@/components/header/nav';

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if(isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
      <div className="main">
        <div className="fixed right-0 z-[1] p-[30px]">
          <div 
            onClick={() => {setIsActive(!isActive)}} 
            className="w-20 h-20 rounded-full bg-primary cursor-pointer flex items-center justify-center"
          >
            <div className="w-full relative">
              <div 
                className={`
                  before:content-[''] before:block before:h-[1px] before:w-[40%] before:mx-auto before:bg-white before:relative before:transition-transform before:duration-300
                  after:content-[''] after:block after:h-[1px] after:w-[40%] after:mx-auto after:bg-white after:relative after:transition-transform after:duration-300
                  ${isActive ? 
                    'before:rotate-45 before:top-0 after:-rotate-45 after:top-[-1px]' : 
                    'before:top-[5px] after:top-[-5px]'
                  }
                `}
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}
