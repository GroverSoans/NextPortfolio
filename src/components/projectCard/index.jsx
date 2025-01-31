'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion"
import { Github, ArrowUpRight } from "lucide-react"

// ProjectCard component displays individual project information
// Includes image/video preview, description, and links
const ProjectCard = ({
  title,
  description,
  imageUrl,
  videoUrl,
  githubUrl,
  imageOnRight = false,
  tags = [],
}) => {
  // State to handle video preview on hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border-2 border-light-primary/10 hover:border-light-secondary transition-colors duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Media container - handles both image and video display */}
      <motion.div
        className={`relative h-[300px] overflow-hidden rounded-xl ${imageOnRight ? "md:order-last" : ""}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Conditional render of video on hover or static image */}
        {videoUrl && isHovered ? (
          <video
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            ref={(el) => {
              if (el) {
                el.playbackRate = 4.0;  // Speed up video playback
              }
            }}
          />
        ) : (
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </motion.div>

      {/* Project information section */}
      <div className="flex flex-col justify-between space-y-4">
        <div className="space-y-4">
          <motion.h2
            className="text-2xl font-semibold tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {description}
          </motion.p>

          {tags.length > 0 && (
            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full">
                  {tag}
                </span>
              ))}
            </motion.div>
          )}
        </div>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            <Github className="h-5 w-5 text-light-secondary" />
            View Source
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            <ArrowUpRight className="h-5 w-5 text-light-secondary" />
            Live Demo
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
