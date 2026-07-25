import { navigation } from "@/data/navigation.data";

import { Container } from "./Container";
import { NavItem } from "./NavItem";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-[var(--navbar-height)] border-b border-[color:var(--border)] bg-white/90 backdrop-blur">
      <Container className="h-full">
        <nav className="flex h-full items-center justify-between">
          <a
            href="#home"
            className="cursor-pointer text-lg font-bold tracking-tight transition-colors hover:text-[color:var(--accent)]"
          >
            El Mehdi.
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            <button
              className="md:hidden cursor-pointer rounded-md p-2 transition-colors hover:bg-[color:var(--border)]"
              aria-label="Open navigation"
            >
              ☰
            </button>
            {navigation.map(({ href, label }) => (
              <li key={href}>
                <NavItem href={href}>{label}</NavItem>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
