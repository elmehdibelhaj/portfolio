import { navigation } from "@/data/navigation.data";

import { Container } from "./Container";
import { NavItem } from "./NavItem";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-[var(--navbar-height)] border-b border-[color:var(--border)] bg-white/90 backdrop-blur">
      <Container className="h-full">
        <nav className="grid h-full grid-cols-[1fr_auto_1fr] items-center">
          <a
            href="#home"
            className="justify-self-start text-lg font-bold tracking-tight"
          >
            El Mehdi.
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navigation.map(({ href, label }) => (
              <li key={href}>
                <NavItem href={href}>{label}</NavItem>
              </li>
            ))}
          </ul>

          <div />
        </nav>
      </Container>
    </header>
  );
}
