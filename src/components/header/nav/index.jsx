import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';



const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className="h-[calc(100vh-4rem)] bg-[#292929]/95 rounded-3xl backdrop-blur-sm fixed right-0 top-8 z-30 text-white mx-4 md:mx-8"
    >
      <div className="h-full p-8 md:p-[100px] flex flex-col justify-between box-border">
        <div 
          onMouseLeave={() => {setSelectedIndicator(pathname)}} 
          className="flex flex-col md:text-[56px] text-3xlgap-3 mt-20"
        >
          <div className="text-[#fff] border-b border-[#fff] uppercase text-[11px] mb-10">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
            <Link 
              key={index} 
              data={{...data, index}} 
              isActive={selectedIndicator == data.href} 
              setSelectedIndicator={setSelectedIndicator}
            />
          ))}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  )
}
