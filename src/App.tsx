import { Outlet } from "react-router-dom";
import { Header } from "./components/layout/header";
import { BottomNav } from "./components/navigation/bottom-nav";

function App() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <div className="flex flex-1 flex-col">
        <Header />
        <Outlet />        
      </div>

      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}

export default App;
