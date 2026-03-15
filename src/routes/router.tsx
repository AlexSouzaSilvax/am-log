import App from "@/App";
import { Budgets } from "@/pages/budgets";
import { LandingPage } from "@/pages/landing-page";
import NotFound from "@/pages/not-found";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/budgets",
        element: <Budgets />,
      },
      {
        path: "/feedbacks",
        element: <h1>Feedbacks</h1>,
      },
      {
        path: "/settings",
        element: <h1>Configurações</h1>,
      },
    ],
  },
]);
