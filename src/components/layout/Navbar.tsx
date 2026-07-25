import { DesktopNavigation } from "./DesktopNavigation";
import { MenuButton } from "./MenuButton";
import { MobileNavigation } from "./MobileNavigation";
import { Container } from "./Container";
import { useMobileMenu } from "../../hooks/useMobileMenu";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function Navbar() {
  const { isOpen, toggle, close } = useMobileMenu();
  const activeSection = useActiveSection();

  return (
    <>
      <header className="sticky top-0 z-50 h-[var(--navbar-height)] border-b border-[color:var(--border)] bg-[color:var(--surface)] backdrop-blur">
        <Container className="h-full">
          <nav className="flex h-full items-center justify-between gap-4">
            <a
              href="#home"
              className="cursor-pointer text-lg font-bold tracking-tight transition-colors hover:text-[color:var(--accent)]"
            >
              El Mehdi.
            </a>

            <div className="flex items-center gap-2">
              <DesktopNavigation activeSection={activeSection} />

              <ThemeToggle />

              <MenuButton isOpen={isOpen} onClick={toggle} />
            </div>
          </nav>
        </Container>
      </header>

      <MobileNavigation
        isOpen={isOpen}
        onClose={close}
        activeSection={activeSection}
      />
    </>
  );
}
