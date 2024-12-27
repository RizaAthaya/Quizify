import Navbar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="flex flex-col h-screen bg-blue-50">
            {/* Navbar */}
            <Navbar />

            {/* CONTENT */}
            <main className="overflow-y-auto">
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;
