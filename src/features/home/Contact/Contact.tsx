import { Container, Section } from "@/components/layout";
import { Button, Heading, Text } from "@/components/ui";

import { contact } from "@/data/contact.data";

import { SocialLink } from "./SocialLink";

export function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-title">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading id="contact-title" as="h2" className="mx-auto max-w-2xl">
            {contact.title}
          </Heading>

          <Text className="mx-auto mt-8 max-w-2xl">{contact.description}</Text>

          <div className="mt-12 flex justify-center w-full sm:w-auto">
            <Button
              as="a"
              href={`mailto:${contact.email}`}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8">
            <SocialLink href={contact.linkedin}>LinkedIn</SocialLink>
            <SocialLink href={contact.github}>GitHub</SocialLink>
            <SocialLink href={contact.resume}>Resume</SocialLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
