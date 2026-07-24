import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui";

import { projects } from "@/data/projects.data";

import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <Section id="projects">
      <Container>
        <Heading as="h2">Featured Projects</Heading>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
