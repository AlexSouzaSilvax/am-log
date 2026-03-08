import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryProvider } from "./app/providers/query-provider";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import "./index.css";
import { router } from "./routes/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <ThemeProvider>
        <Toaster />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryProvider>
  </StrictMode>,
);
