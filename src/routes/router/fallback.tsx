import NotFoundPage from "../../pages/fallback/NotFoundPage";

export const fallbackRoutes = [
  {
    path: '*',
    element: <NotFoundPage />,
  },
];