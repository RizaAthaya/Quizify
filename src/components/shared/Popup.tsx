import React from "react";
import Button from "./Button";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

interface IPopupProps {
    message: string;
    onContinue: () => void;
    onCancel: () => void;
}

const Popup: React.FC<IPopupProps> = ({ message, onContinue, onCancel }) => {
    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50">
                <div className="bg-white max-w-[calc(100%-32px)] p-6 md:p-10 rounded-lg shadow-xl md:max-w-sm w-full text-center flex-col gap-6 flex justify-center items-center" >
                    <ExclamationCircleIcon className="text-blue-500 w-32 h-32 " />
                    <h2 className="text-xl font-semibold mb-4">{message}</h2>
                    <div className="flex justify-around gap-4">
                        <Button
                            size="large"
                            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                            onClick={onCancel}
                        >
                            Cancel
                        </Button>
                        <Button
                            size="large"
                            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={onContinue}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;
