import React from "react";
import { useNavigate } from "react-router-dom";

// assets 
import Image from "../../assets/error.svg"
import Button from "../../components/shared/Button";

const ErrorPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-200 via-indigo-100 to-purple-200 flex items-center justify-center px-6">
            <div className="text-center bg-white bg-opacity-90 p-8 sm:p-12 rounded-lg shadow-xl space-y-8 max-w-lg sm:max-w-3xl w-full transform transition-all duration-500 hover:scale-105">
                {/* TITLE */}
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Error Occurred</h1>
                {/* Illustration */}
                <div className="flex items-center justify-center w-full py-4">
                    <img
                        src={Image}
                        className="max-w-xs sm:max-w-md w-full transition-transform duration-500 transform hover:scale-110"
                        alt="404 Illustration"
                    />
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600 mb-6">
                    Something went wrong. Please contact the developer for further assistance.
                </p>
                {/* Button*/}
                <Button
                    onClick={() => navigate("/auth/login")}
                    className="mt-6 inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg transform transition duration-300 hover:bg-blue-700 hover:scale-105"
                >
                    Go Back to Home
                </Button>
            </div>
        </div>
    );
};

export default ErrorPage;
