import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui";

import { skillGroups } from "@/data/skills.data";

import { SkillGroup } from "./SkillGroup";
import { FadeUp, Stagger } from "@/components/motion";

export function Skills() {
  return (
    <Section id="skills" aria-labelledby="skills-title">
      <Container>
        <FadeUp>
          <Heading id="skills-title" as="h2">
            Skills
          </Heading>
        </FadeUp>

        <Stagger className="mt-16 grid gap-x-12 gap-y-16 md:grid-cols-2">
          {skillGroups.map((group) => (
            <FadeUp key={group.title}>
              <SkillGroup group={group} />
            </FadeUp>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
