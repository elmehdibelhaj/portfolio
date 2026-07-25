import { Badge, Heading } from "@/components/ui";
import type { SkillGroup as SkillGroupType } from "@/types/content/skill";
import { motion } from "motion/react";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <motion.article
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Heading id="skill-group-title" as="h3" className="mb-6">
        {group.title}
      </Heading>

      <div className="flex flex-wrap gap-3">
        {group.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </motion.article>
  );
}
