import {
  About,
  Contact,
  Experience,
  Hero,
  Projects,
  Skills,
  Footer,
} from "./index";

export function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
