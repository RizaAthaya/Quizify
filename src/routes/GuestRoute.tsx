import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import LoadingPage from '../pages/fallback/LoadingPage';

const GuestRoute: React.FC = () => {
  const { user, loading } = useUser();

  const isAuthenticated = !!user;

  if (loading) {
    return <LoadingPage />;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
