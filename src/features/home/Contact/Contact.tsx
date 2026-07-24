import { Container, Section } from "@/components/layout";
import { Button, Heading, Text } from "@/components/ui";

import { contact } from "@/data/contact.data";

import { SocialLink } from "./index";

export function Contact() {
  return (
    <Section id="contact">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Heading as="h2">{contact.title}</Heading>

          <Text className="mt-6">{contact.description}</Text>

          <div className="mt-10 flex justify-center">
            <a href={`mailto:${contact.email}`}>
              <Button>Get In Touch</Button>
            </a>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <SocialLink href={contact.linkedin}>LinkedIn</SocialLink>
            <SocialLink href={contact.github}>GitHub</SocialLink>
            <SocialLink href={contact.resume}>Resume</SocialLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
