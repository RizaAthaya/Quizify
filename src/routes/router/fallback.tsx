import NotFound from "../../pages/errors/NotFound";

export const fallbackRoutes = [
  {
    path: '*',
    element: <NotFound />,
  },
];