import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import LoadingPage from "../pages/fallback/LoadingPage";
import { useEffect, useState } from "react";
import Popup from "../components/shared/Popup";

const ProtectedRoute = () => {
    const quiz = !!localStorage.getItem("timer");
    const { user, loading } = useUser();
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const isAuthenticated = !!user;

    const handleCancel = () => {
        localStorage.removeItem("quizify_data");
        localStorage.removeItem("timer");
        setShowPopup(false)
        navigate("/dashboard")
    };

    const handleContinue = () => {
        setShowPopup(false);
        navigate("/quiz");
    };

    useEffect(() => {
        if (quiz && isAuthenticated) {
            navigate('/dashboard')
            setShowPopup(true);
        }
    }, [quiz, isAuthenticated]);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <>
            {showPopup && (
                <Popup
                    message="Will you continue the quiz?"
                    onCancel={handleCancel}
                    onContinue={handleContinue}
                />
            )}
            {isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace={true} />}
        </>
    );
};

export default ProtectedRoute;
