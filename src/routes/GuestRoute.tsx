import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";

const GuestRoute = () => {
    const { user } = useUser();

    const isAuthenticated = !!user;

    return isAuthenticated ? <Navigate to="/dashboard" replace={true} /> : <Outlet />;
};

export default GuestRoute;
