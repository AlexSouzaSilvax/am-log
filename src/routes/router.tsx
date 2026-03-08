import App from "@/App";
import QuotePage from "@/features/quote/pages";
import NotFound from "@/pages/not-found";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/quote",
        element: <QuotePage />,
      },
    ],
  },
]);
