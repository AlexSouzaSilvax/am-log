import App from "@/App";
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
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);
