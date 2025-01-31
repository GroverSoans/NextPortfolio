'use client'
import Image from 'next/image';
import { motion } from "framer-motion"

const EducationCard = ({
  school,
  degree,
  duration,
  description,
  gpa,
  achievements,
  imageUrl
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/50 backdrop-blur-sm rounded-2xl border-2 border-light-primary/10 hover:border-light-secondary transition-colors duration-300"
    >
      <motion.div
        className="relative h-[300px] overflow-hidden rounded-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={school}
          fill
          sizes="(max-width: 768px) 200px, 200px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
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
            {school}
          </motion.h2>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-lg font-medium text-gray-900">{degree}</p>
            <p className="text-sm text-gray-600">{duration}</p>
            {gpa && <p className="text-sm font-medium text-gray-700">GPA: {gpa}</p>}
          </motion.div>

          <motion.p
            className="text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {description}
          </motion.p>

          {achievements && achievements.length > 0 && (
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="text-sm font-semibold text-gray-900">Achievements</h3>
              <ul className="list-disc list-inside space-y-1">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard; 