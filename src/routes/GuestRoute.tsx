import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
    const isAuthenticated = false;

    return isAuthenticated ? <Navigate to="/admin/dashboard" replace={true} /> : <Outlet />;

};

export default GuestRoute;
