import { navigation } from "@/data/navigation.data";
import { NavItem } from "./NavItem";

interface DesktopNavigationProps {
  activeSection: string;
}

export function DesktopNavigation({ activeSection }: DesktopNavigationProps) {
  return (
    <ul className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <li key={item.href}>
          <NavItem
            href={item.href}
            active={activeSection === item.href.substring(1)}
          >
            {item.label}
          </NavItem>
        </li>
      ))}
    </ul>
  );
}
