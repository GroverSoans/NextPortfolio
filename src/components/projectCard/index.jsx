import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ArrowUpRight } from "lucide-react"


export default function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  imageOnRight = false,
  tags = [],
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-100"
    >
      <motion.div
        className={`relative h-[300px] overflow-hidden rounded-xl ${imageOnRight ? "md:order-last" : ""}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </motion.div>

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
  )
}
