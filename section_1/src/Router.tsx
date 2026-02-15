import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [],
  },
]);
