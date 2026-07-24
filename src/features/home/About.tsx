import { Container, Section } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

import { about } from "@/data/about.data";

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-16 lg:grid-cols-12">
          <Heading as="h2">{about.title}</Heading>
          <div className="mt-8 space-y-6">
            {about.description.map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
