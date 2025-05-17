"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"

interface Skill {
  name: string
  percentage: number
}

interface AnimatedSkillsProps {
  skills: Skill[]
}

export function AnimatedSkills({ skills }: AnimatedSkillsProps) {
  return (
    <div className="space-y-6">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          className="space-y-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between">
            <motion.span
              className="font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {skill.name}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              {skill.percentage}%
            </motion.span>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
          >
            <Progress
              value={skill.percentage}
              className="h-2"
              indicatorClassName="bg-gradient-to-r from-gradient-start via-gradient-middle to-gradient-end"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
