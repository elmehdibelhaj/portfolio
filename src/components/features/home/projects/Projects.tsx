import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui";

import { projects } from "@/data/projects.data";

import { ProjectCard } from "./ProjectCard";
import { FadeUp, Stagger } from "@/components/motion";

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);
  const additionalProjects = projects.filter((project) => !project.featured);

  return (
    <Section id="projects" aria-labelledby="projects-title">
      <Container>
        <Heading id="projects-title" as="h2">
          Featured Projects
        </Heading>

        <Stagger className="mt-16 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <FadeUp key={project.id}>
              <ProjectCard project={project} />
            </FadeUp>
          ))}
        </Stagger>

        {additionalProjects.length > 0 && (
          <div className="mt-24">
            <Heading as="h3">Additional Projects</Heading>

            <Stagger className="mt-12 grid gap-8 lg:grid-cols-2">
              {additionalProjects.map((project) => (
                <FadeUp key={project.id}>
                  <ProjectCard project={project} />
                </FadeUp>
              ))}
            </Stagger>
          </div>
        )}
      </Container>
    </Section>
  );
}