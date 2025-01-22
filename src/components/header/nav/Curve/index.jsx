'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

export default function Curve() {
  const [dimensions, setDimensions] = useState({ height: 0 });

  useEffect(() => {
    // Set initial dimensions
    setDimensions({ height: window.innerHeight });

    // Handle resize
    const handleResize = () => {
      setDimensions({ height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initialPath = `M100 0 L200 0 L200 ${dimensions.height} L100 ${dimensions.height} Q-100 ${dimensions.height/2} 100 0`
  const targetPath = `M100 0 L200 0 L200 ${dimensions.height} L100 ${dimensions.height} Q100 ${dimensions.height/2} 100 0`
  
  const curve = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
      d: initialPath,
      transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    }
  }

  return (
    <svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-[#292929] stroke-none">
      <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  )
}
