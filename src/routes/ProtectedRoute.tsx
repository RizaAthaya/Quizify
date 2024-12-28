import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";
import LoadingPage from "../pages/fallback/LoadingPage";

const ProtectedRoute = () => {
    const quiz = !!localStorage.getItem("quizify_data");

    const { user, loading } = useUser();

    const isAuthenticated = !!user;
    
    if (loading) {
        return <LoadingPage />;
    }

    return isAuthenticated || quiz ? <Outlet /> : <Navigate to="/auth/login" replace={true} />;
};

export default ProtectedRoute;
