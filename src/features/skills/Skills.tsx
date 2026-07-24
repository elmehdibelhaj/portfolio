import { Container, Section } from "@/components/layout";
import { Heading } from "@/components/ui";

import { skillGroups } from "@/data/skills.data";

import { SkillGroup } from "./SkillGroup";

export function Skills() {
  return (
    <Section id="skills">
      <Container>
        <Heading as="h2">Skills</Heading>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
