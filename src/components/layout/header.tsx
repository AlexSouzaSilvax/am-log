import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="flex items-center justify-between border-b p-4">
      <div>
        <div
          className="flex flex-row gap-1 hover:cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Truck size={26} />
          <h1 className="title font-semibold text-xl">AM Log</h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <Avatar>
          <AvatarFallback>AM</AvatarFallback>
        </Avatar>

        <button
          onClick={() => scrollToSection("about")}
          className="text-sm text-muted-foreground hover:text-foreground transition cursor-pointer"
        >
          Quem somos ?
        </button>
      </div>
    </header>
  );
}
