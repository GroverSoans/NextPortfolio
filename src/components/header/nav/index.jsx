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
    title: "Work",
    href: "/work",
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
      className="h-screen bg-[#292929] fixed right-0 top-0 text-white"
    >
      <div className="h-full p-[100px] flex flex-col justify-between box-border">
        <div 
          onMouseLeave={() => {setSelectedIndicator(pathname)}} 
          className="flex flex-col text-[56px] gap-3 mt-20"
        >
          <div className="text-[#999] border-b border-[#999] uppercase text-[11px] mb-10">
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
