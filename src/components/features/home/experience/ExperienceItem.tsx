import { Badge, Heading, Text } from "@/components/ui";

import type { ExperienceEntry } from "@/types/content/experience";

interface ExperienceItemProps {
  experience: ExperienceEntry;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="border-b border-[color:var(--border)] pb-16 last:border-none last:pb-0">
      <Heading as="h3">{experience.role}</Heading>

      <Text className="mt-2 font-medium">
        {experience.company} • {experience.location}
      </Text>

      <Text size="sm" muted className="mt-1">
        {experience.period}
      </Text>

      <Text className="mt-8">{experience.summary}</Text>

      <ul className="mt-8 space-y-4">
        {experience.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--foreground)]" />

            <Text>{highlight}</Text>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap gap-2">
        {experience.technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>
    </article>
  );
}
