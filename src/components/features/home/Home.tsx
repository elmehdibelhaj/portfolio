import {
  About,
  Contact,
  Experience,
  Hero,
  Projects,
  Skills,
  Footer,
} from "./index";
import { SEO, StructuredData } from "@/components/seo";

export function Home() {
  return (
    <>
      <SEO />
      <StructuredData />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
