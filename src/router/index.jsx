import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../shared/layouts/mainlayout";
import Home from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",

    element: <MainLayout />,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
