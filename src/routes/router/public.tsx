import { Navigate } from 'react-router-dom';
import Login from '../../pages/auth/Login';
import Register from '../../pages/auth/Register';

export const publicRoutes = [
  {
    path: '/',
    element: <Navigate to={'/auth/login'} />,
  },
  {
    path: '/auth',
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ]
  }
];