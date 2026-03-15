import { TabItem } from "@/types/tab-navigation";
import { Package, Settings, Star } from "lucide-react";

export const tabs: TabItem[] = [
  //{ to: "/", label: "Dashboard", icon: Home },
  { to: "/budgets", label: "Nova Cotação", icon: Package },
  { to: "/feedbacks", label: "Avaliações", icon: Star },
  { to: "/settings", label: "Configurações", icon: Settings },
];
