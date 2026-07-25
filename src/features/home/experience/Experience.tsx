import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui";

import { experiences } from "@/data/experience.data";

import { ExperienceItem } from "./ExperienceItem";
import { FadeUp, Stagger } from "@/components/motion";

export function Experience() {
  return (
    <Section id="experience" aria-labelledby="experience-title">
      <Container>
        <div className="max-w-5xl">
          <Heading id="experience-title" as="h2">
            Experience
          </Heading>

          <Stagger className="mt-16 space-y-16">
            {experiences.map((experience) => (
              <FadeUp key={`${experience.company}-${experience.role}`}>
                <ExperienceItem experience={experience} />
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
