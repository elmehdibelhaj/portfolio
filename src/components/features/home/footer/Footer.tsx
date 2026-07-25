import { Code2, Heart } from "lucide-react";
import { siReact, siTailwindcss, siTypescript, siVite } from "simple-icons";

import { Container } from "@/components/layout";
import { Divider, TechIcon, Text } from "@/components/ui";

export function Footer() {
  return (
    <footer className="pt-8 pb-10">
      <Divider />

      <Container>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <Text size="sm">© {new Date().getFullYear()} El Mehdi BELHAJ.</Text>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Code2
              className="h-4 w-4 text-[color:var(--accent)]"
              aria-hidden="true"
            />

            <Text size="sm" muted>
              Crafted with care
            </Text>

            <div className="flex items-center gap-2">
              <TechIcon icon={siReact} href="https://react.dev" />

              <TechIcon
                icon={siTypescript}
                href="https://www.typescriptlang.org"
              />

              <TechIcon icon={siVite} href="https://vite.dev" />

              <TechIcon icon={siTailwindcss} href="https://tailwindcss.com" />
            </div>

            <Text size="sm" muted>
              • v1.0.0
            </Text>

            <Heart
              className="h-4 w-4 fill-current text-[color:var(--accent)]"
              aria-hidden="true"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
