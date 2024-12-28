import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import LoadingPage from '../pages/fallback/LoadingPage';

const GuestRoute: React.FC = () => {
  const { user, loading } = useUser(); 

  const isAuthenticated = !!user;
  const quiz = !!localStorage.getItem('quizify_data');
  
  if (loading) {
    return <LoadingPage />; 
  }

  if (isAuthenticated) {
    if (quiz) {
      return <Navigate to="/quiz" replace />;
    } else {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return <Outlet />;
};

export default GuestRoute;
