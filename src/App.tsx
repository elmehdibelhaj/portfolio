import { Button } from "./components/ui/Button";
import { Container } from "./components/layout/Container";
import { Section } from "./components/layout/Section";

export default function App() {
  return (
    <main>
      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Senior Software Engineer
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl">
              Building scalable enterprise applications with React and .NET.
            </h1>

            <p className="mt-8 text-lg leading-8 text-zinc-600">
              I'm Mehdi, a software engineer with 9+ years of experience
              building enterprise applications, improving performance, and
              delivering accessible digital products for organizations like
              Globant and Deloitte.
            </p>

            <div className="mt-10 flex gap-4">
              <Button>View Projects</Button>
              <Button variant="secondary">Contact Me</Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
