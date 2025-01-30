'use client'

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from '@/components/header/nav';
import { useNavStore } from '@/store/navStore';

export default function Header() {
  const { isNavOpen, toggleNav, closeNav } = useNavStore();
  const pathname = usePathname();

  useEffect(() => {
    if(isNavOpen) closeNav()
  }, [pathname])

  return (
    <>
      <div className="main">
        <div className="fixed right-0 z-30 px-7 md:px-16 py-4 md:py-10">
          <div 
            onClick={toggleNav} 
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-light-primary cursor-pointer flex items-center justify-center"
          >
            <div className="w-full relative">
              <div className={`
                before:content-[''] before:block before:h-[1px] before:w-[40%] before:mx-auto before:bg-white before:relative before:transition-transform before:duration-300
                after:content-[''] after:block after:h-[1px] after:w-[40%] after:mx-auto after:bg-white after:relative after:transition-transform after:duration-300
                ${!isNavOpen ? 
                  'before:rotate-45 before:top-0 after:-rotate-45 after:top-[-1px]' : 
                  'before:top-[5px] after:top-[-5px]'
                }
              `}/>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {!isNavOpen && <Nav />}
      </AnimatePresence>
    </>
  )
}
