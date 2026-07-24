import { Container } from "@/components/layout";
import { Divider, Text } from "@/components/ui";

export function Footer() {
  return (
    <footer className="pt-8 pb-10">
      <Divider />

      <Container>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <Text size="sm">© {new Date().getFullYear()} El Mehdi Belhaj.</Text>

          <Text size="sm" muted>
            Built with React, TypeScript, Vite & Tailwind CSS.
          </Text>
        </div>
      </Container>
    </footer>
  );
}
