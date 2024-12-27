import App from '../../App';
import Login from '../../pages/auth/Login';

export const publicRoutes = [
  {
    path: '/',
    element: <App />,
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