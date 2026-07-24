import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui";

import { experiences } from "@/data/experience.data";

import { ExperienceItem } from "./ExperienceItem";

export function Experience() {
  return (
    <Section id="experience">
      <Container>
        <div className="max-w-5xl">
          <Heading as="h2">Experience</Heading>

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
