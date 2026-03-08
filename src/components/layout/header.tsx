import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <h1 className="font-semibold text-lg">Sistema Logístico</h1>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <Avatar>
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
