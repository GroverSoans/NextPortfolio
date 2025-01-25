'use client'
import { motion } from "framer-motion"

// Animation variants for page transitions
// Controls the initial state, animate state, and exit animations
const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20    // Start slightly below final position
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2  // Delay between child animations
      }
    },
    exit: {
      opacity: 0,
      y: -20,   // Exit upwards
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}

export default PageTransition 