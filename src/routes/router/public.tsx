import { Navigate } from 'react-router-dom';
import Login from '../../pages/auth/Login';

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
      }
    ]
  }
];