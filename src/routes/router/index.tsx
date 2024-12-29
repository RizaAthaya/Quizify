import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./public";
import { privateRoutes } from "./private";
import { fallbackRoutes } from "./fallback";
import ProtectedRoute from "../ProtectedRoute";
import GuestRoute from "../GuestRoute";
import ErrorPage from "../../pages/fallback/ErrorPage";

export const router = createBrowserRouter([
  // Private 
  {
    element: <ProtectedRoute />,
    children: privateRoutes,
    errorElement: <ErrorPage />, 
  },

  // Public
  {
    element: <GuestRoute />,
    children: publicRoutes,
    errorElement: <ErrorPage />, 
  },

  // Fallback
  {
    path: "*",
    children: fallbackRoutes,
    errorElement: <ErrorPage />, 
  },
]);
