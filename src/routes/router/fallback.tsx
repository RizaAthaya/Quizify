import NotFound from "../../pages/fallback/NotFound";

export const fallbackRoutes = [
  {
    path: '*',
    element: <NotFound />,
  },
];