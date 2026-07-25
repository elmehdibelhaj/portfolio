import { useEffect, useRef } from "react";
import { navigation } from "@/data/navigation.data";
import { NavItem } from "./NavItem";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      window.addEventListener("pointerdown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`
          fixed inset-0 z-40 bg-black/20 transition-opacity duration-300
          ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      <div
        ref={ref}
        className={`
          fixed
          left-0
          right-0
          top-[var(--navbar-height)]
          z-50
          border-b
          border-[color:var(--border)]
          bg-white
          transition-all
          duration-300

          ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 pointer-events-none opacity-0"
          }
        `}
      >
        <nav className="px-5 py-6">
          <ul className="space-y-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <NavItem href={item.href} onClick={onClose}>
                  {item.label}
                </NavItem>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
