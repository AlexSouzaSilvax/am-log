import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
      fixed bottom-6 right-6
      z-50
      p-3
      rounded-full
      bg-black text-white
      dark:bg-white dark:text-black
      shadow-lg
      hover:scale-110
      transition
      cursor-pointer
      "
    >
      <ArrowUp size={20} />
    </button>
  );
}
