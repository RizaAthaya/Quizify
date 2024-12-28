import { useNavigate } from "react-router-dom";
import useSavedData from "../../hooks/useSavedData";
import Button from "../../components/shared/Button";
import Box from "../../components/shared/Box";

const ResultsQuizPage = () => {
    // states 
    const navigate = useNavigate();
    const quizifyData = useSavedData();
    const { score, amount, category, difficulty, type } = quizifyData;

    // calculate 
    const totalTime = amount * 60;
    const calculatedScore = Math.round((score / amount) * 100);

    const goBackToDashboard = () => {
        localStorage.removeItem("quizify_data");
        navigate("/dashboard");
    };

    return (
        <div className="p-8 min-h-full">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Quiz Results</h1>

            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 space-y-6">
                {/* Score */}
                <div className="flex justify-center">
                    <div className="w-24 h-24 md:w-36 md:h-36 bg-blue-600 text-white flex items-center justify-center rounded-full text-4xl md:text-6xl font-semibold">
                        {calculatedScore}
                    </div>
                </div>

                {/* Quiz Summary */}
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Box
                            title="Correct Answers"
                            value={score}
                            color="bg-green-100"
                            textColor="text-green-800"
                        />
                        <Box
                            title="Incorrect Answers"
                            value={amount - score}
                            color="bg-red-100"
                            textColor="text-red-800"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Box
                            title="Category"
                            value={category}
                            color="bg-blue-100"
                            textColor="text-blue-800"
                        />
                        <Box
                            title="Difficulty"
                            value={difficulty}
                            color="bg-yellow-100"
                            textColor="text-yellow-800"
                        />
                        <Box
                            title="Type"
                            value={type}
                            color="bg-purple-100"
                            textColor="text-purple-800"
                        />
                        <Box
                            title="Total Time Spent"
                            value={`${totalTime} seconds`}
                            color="bg-gray-100"
                            textColor="text-gray-800"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <Button
                    size="large"
                    onClick={goBackToDashboard}
                    className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-200"
                >
                    Go Back to Dashboard
                </Button>
            </div>
        </div>
    );
};

export default ResultsQuizPage;
