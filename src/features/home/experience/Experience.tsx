import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui";

import { experiences } from "@/data/experience.data";

import { ExperienceItem } from "./ExperienceItem";

export function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-title">
      <Container>
        <div className="max-w-5xl">
          <Heading id="experience-title" as="h2">
            Experience
          </Heading>

          <div className="mt-16 space-y-16">
            {experiences.map((experience) => (
              <ExperienceItem
                key={`${experience.company}-${experience.role}`}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
