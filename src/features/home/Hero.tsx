import { hero } from "@/data/home.data";

import { Container } from "@/components/layout";
import { Button, Heading, Text } from "@/components/ui";

export function Hero() {
  const { eyebrow, title, description, primaryAction, secondaryAction } = hero;

  return (
    <section id="home" className="flex min-h-[calc(100vh-var(--navbar-height))] items-center">
      <Container>
        <header className="max-w-2xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
              {eyebrow}
            </p>
          )}

          <Heading>{title}</Heading>

          <Text size="lg" muted className="mt-10">
            {description}
          </Text>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>{primaryAction.label}</Button>

            <Button variant="secondary">{secondaryAction.label}</Button>
          </div>
        </header>
      </Container>
    </section>
  );
}
