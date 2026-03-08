import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryProvider } from "./app/providers/query-provider";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </QueryProvider>,
);
