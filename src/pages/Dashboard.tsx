import React from "react";
import { useUser } from "../context/UserContext";
import QuizSettings from "../components/features/quiz/QuizSettings";
import QuizChallengeBox from "../components/features/quiz/QuizChallengeBox";

const Dashboard: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="w-full h-auto lg:h-full flex flex-col p-6 lg:p-10">
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl lg:text-4xl font-semibold text-blue-800">Hi {user?.displayName}!</h1>
        <span className="text-base lg:text-lg text-gray-600 mt-2 block">How's your day? Ready to train the brain?</span>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10">
        {/* LEFT Section*/}
        <div className="w-full lg:w-1/3">
          <QuizSettings />
        </div>

        {/* RIGHT Section*/}
        <div className="w-full lg:w-2/3">
          <QuizChallengeBox />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
