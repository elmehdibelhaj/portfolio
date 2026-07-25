import { navigation } from "@/data/navigation.data";
import { NavItem } from "./NavItem";

export function DesktopNavigation() {
  return (
    <ul className="hidden items-center gap-8 md:flex">
      {navigation.map((item) => (
        <li key={item.href}>
          <NavItem href={item.href}>{item.label}</NavItem>
        </li>
      ))}
    </ul>
  );
}
