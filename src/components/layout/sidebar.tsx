import { Button } from "@/components/ui/button";
import { FileText, LayoutDashboard, Menu, Truck, Users } from "lucide-react";
import { useState } from "react";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-screen border-r bg-background transition-all ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && <span className="font-bold">AM Log</span>}

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu size={18} />
        </Button>
      </div>

      <nav className="space-y-2 p-2">
        <a className="flex items-center gap-2 p-2 rounded hover:bg-muted">
          <LayoutDashboard size={18} />
          {!collapsed && "Dashboard"}
        </a>

        <a className="flex items-center gap-2 p-2 rounded hover:bg-muted">
          <FileText size={18} />
          {!collapsed && "Orçamentos"}
        </a>

        <a className="flex items-center gap-2 p-2 rounded hover:bg-muted">
          <Truck size={18} />
          {!collapsed && "Fretes"}
        </a>

        <a className="flex items-center gap-2 p-2 rounded hover:bg-muted">
          <Users size={18} />
          {!collapsed && "Clientes"}
        </a>
      </nav>
    </div>
  );
}
