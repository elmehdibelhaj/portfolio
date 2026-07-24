import { Badge, Heading } from "@/components/ui";

import type { SkillGroup as SkillGroupType } from "@/types/content/skill";

interface SkillGroupProps {
  group: SkillGroupType;
}

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article>
      <Heading as="h3" className="mb-6">
        {group.title}
      </Heading>

      <div className="flex flex-wrap gap-3">
        {group.skills.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </article>
  );
}
