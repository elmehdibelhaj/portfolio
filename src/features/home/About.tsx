import { Container, Section } from "@/components/layout";
import { FadeUp, Stagger } from "@/components/motion";
import { Heading, Text } from "@/components/ui";

import { about } from "@/data/about.data";

export function About() {
  return (
    <Section id="about" aria-labelledby="about-title">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <FadeUp>
              <Heading as="h2" id="about-title">
                {about.title}
              </Heading>
            </FadeUp>
          </div>

          <Stagger className="space-y-6 lg:col-span-8">
            {about.description.map((paragraph) => (
              <FadeUp key={paragraph}>
                <Text>{paragraph}</Text>
              </FadeUp>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
