import { Container, Section } from "@/components/layout";
import { Heading, Text } from "@/components/ui";

import { about } from "@/data/about.data";

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Heading as="h2">{about.title}</Heading>
          </div>

          <div className="space-y-6 lg:col-span-8">
            {about.description.map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
