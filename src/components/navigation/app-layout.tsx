import { Outlet } from "react-router-dom";
import { BottomNav } from "./bottom-nav";
import { Sidebar } from "./sidebar";

export function AppLayout() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* sidebar desktop */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* conteúdo */}
      <main className="flex-1 p-6 pb-20 md:pb-6">
        <Outlet />
      </main>

      {/* bottom nav mobile */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
