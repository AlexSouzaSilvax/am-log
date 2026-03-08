import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen bg-background text-foreground">
        {/* Sidebar */}
        <Sidebar />

        {/* Conteúdo */}
        <div className="flex flex-1 flex-col">
          {/* Header */}
          <Header />

          {/* Conteúdo da página */}
          <main className="flex-1 p-6">
Conteudo
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
