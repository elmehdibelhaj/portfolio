import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui";

import { projects } from "@/data/projects.data";

import { ProjectCard } from "./ProjectCard";
import { FadeUp, Stagger } from "@/components/motion";

export function Projects() {
  return (
    <Section id="projects" aria-labelledby="projects-title">
      <Container>
        <Heading id="projects-title" as="h2">
          Featured Projects
        </Heading>

        <Stagger className="mt-16 grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <FadeUp key={project.id}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
