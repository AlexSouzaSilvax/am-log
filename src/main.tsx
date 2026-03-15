import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { MapProvider } from "./app/providers/map-provider";
import { QueryProvider } from "./app/providers/query-provider";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/sonner";
import "./index.css";
import { router } from "./routes/router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <ThemeProvider>
        <MapProvider>
          <Toaster />
          <RouterProvider router={router} />
        </MapProvider>
      </ThemeProvider>
    </QueryProvider>
  </StrictMode>,
);
