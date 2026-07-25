import { Badge, Button, Heading, Text } from "@/components/ui";

import type { Project } from "@/types/content/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        flex
        h-full
        flex-col
        rounded-xl
        border
        border-[color:var(--border)]
        p-6
        lg:p-8
        transition-all
        hover:-translate-y-1
      "
    >
      <Heading as="h3">{project.title}</Heading>

      <Text className="mt-4">{project.description}</Text>

      <ul className="mt-6 space-y-2 lg:space-y-3">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--foreground)]" />

            <Text>{highlight}</Text>
          </li>
        ))}
      </ul>

      <div className="mt-6 lg:mt-8 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </div>

      {(project.github || project.demo) && (
        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row lg:pt-8">
          {project.github && (
            <Button variant="secondary" className="w-full sm:w-auto">
              GitHub
            </Button>
          )}
          {project.demo && <Button>Live Demo</Button>}
        </div>
      )}
    </article>
  );
}
