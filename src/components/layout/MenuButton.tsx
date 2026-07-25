import { Menu, X } from "lucide-react";

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close navigation" : "Open navigation"}
      className="
        md:hidden
        rounded-lg
        p-2
        transition-colors
        hover:bg-[color:var(--border)]
      "
    >
      {isOpen ? <X size={22} /> : <Menu size={22} />}
    </button>
  );
}
