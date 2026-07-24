import { Container } from "@/components/layout";

const navigation = ["About", "Experience", "Projects", "Skills", "Contact"];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/50 bg-white/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-[var(--navbar-height)] items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight">
            Mehdi
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
