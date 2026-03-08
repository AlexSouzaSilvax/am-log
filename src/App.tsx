import { Outlet } from "react-router-dom";
import { toast } from "sonner";
import { Header } from "./components/layout/header";
import { Sidebar } from "./components/layout/sidebar";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col">
        <Button
          className="cursor-pointer transition hover:opacity-80"
          onClick={() => {
            toast("Event has been created.");
          }}
        >
          Criar evento
        </Button>

        {/* Header */}
        <Header />
        <Button
          className="cursor-pointer"
          onClick={() => {
            toast("Event has been created.");
          }}
        ></Button>
        <Button
          variant="outline"
          onClick={() => toast.success("Event has been created")}
        >
          Success
        </Button>
        <h1>APP</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
