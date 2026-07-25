import { hero } from "@/data/home.data";

import { Container } from "@/components/layout";
import { Button, Heading, Text } from "@/components/ui";

export function Hero() {
  const { eyebrow, title, description, primaryAction, secondaryAction } = hero;

  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-var(--navbar-height))] items-center"
      aria-labelledby="hero-title"
    >
      <Container>
        <header className="max-w-xl lg:max-w-2xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
              {eyebrow}
            </p>
          )}

          <Heading as="h1" id="hero-title">
            {title}
          </Heading>

          <Text size="lg" muted className="mt-10">
            {description}
          </Text>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              as="a"
              href={primaryAction.href}
              className="w-full sm:w-auto"
            >
              {primaryAction.label}
            </Button>

            <Button
              as="a"
              href={secondaryAction.href}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              {secondaryAction.label}
            </Button>
          </div>
        </header>
      </Container>
    </section>
  );
}
