import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = () => {
    const { user } = useUser();

    const isAuthenticated = !!user;

    return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace={true} />;
};

export default ProtectedRoute;
