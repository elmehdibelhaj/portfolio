import { About, Contact, Experience, Hero, Projects, Skills } from "./index";

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
