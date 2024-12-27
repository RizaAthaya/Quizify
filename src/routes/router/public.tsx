import Login from '../../pages/auth/Login';

export const publicRoutes = [
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/auth',
    children: [
      {
        path: "login",
        element: <Login />,
      }
    ]
  }
];