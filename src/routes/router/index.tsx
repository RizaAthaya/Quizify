import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./public";
import { privateRoutes } from "./private";
import { fallbackRoutes } from "./fallback";
import ProtectedRoute from "../ProtectedRoute";
import GuestRoute from "../GuestRoute";

export const router = createBrowserRouter([
  // Public
  {
    element: <GuestRoute />,
    children: publicRoutes,
  },

  // Private 
  {
    element: <ProtectedRoute />,
    children: privateRoutes,
  },

  // Fallback
  {
    path: "*",
    children: fallbackRoutes,
  },
]);
