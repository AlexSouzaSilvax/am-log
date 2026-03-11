import novaiguacu from "@/assets/map-nova-iguacu.svg";
import { useTheme } from "next-themes";

export function NovaIguacuMap() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <img
        src={novaiguacu}
        className={`
        w-full
        ${theme === "dark" ? "opacity-80 md:opacity-50" : "opacity-5"}
        scale-110
        blur-[0px]
        md:blur-[1px]
        text-zinc-700
        md:text-zinc-900
        dark:text-white
        `}
      />
    </div>
  );
}
