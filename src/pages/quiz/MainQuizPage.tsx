import React, { useState, useCallback } from "react";
import Timer from "../../components/shared/Timer";
import QuizQuestion from "../../components/features/quiz/QuizQuestion";
import { useQuizQuestions } from "../../hooks/useQuiz";
import { useQuizSettings } from "../../context/QuizSettingsContext";
import { useNavigate } from "react-router-dom";
import useSavedData from "../../hooks/useSavedData";
import { useTimer } from "../../hooks/useTimer";
import { useQuizProgress } from "../../hooks/useQuizProgress";

const MainQuizPage: React.FC = () => {
  // Timer 
  const initialTime = localStorage.getItem("timer") ? Number(localStorage.getItem("timer")) : 60;
  const { time, setTime, resetTimer } = useTimer(initialTime);

  // state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState<number>(0);

  // Get question props 
  const { selectedCategory, selectedType, selectedDifficulty, numQuestions, token } = useQuizSettings();
  
  // questions
  const savedData = useSavedData();
  const localQuestions = localStorage.getItem("quizify_data") ? savedData.questions : null;

  const fetchedQuestions = useQuizQuestions({
    amount: numQuestions,
    category: selectedCategory,
    difficulty: selectedDifficulty,
    type: selectedType,
    token: token,
  });
  const questions = React.useMemo(() => localQuestions || fetchedQuestions, [localQuestions, fetchedQuestions]);
  const currentQuestion = questions?.[currentQuestionIndex];

  const navigate = useNavigate();
  
  // Local storage update handler
  const updateLocalStorage = useQuizProgress(
    questions, 
    token, 
    score, 
    selectedCategory, 
    selectedDifficulty, 
    selectedType
  );

  // Move to next question
  const moveToNextQuestion = useCallback(() => {
    resetTimer();

    if (questions && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        updateLocalStorage(newIndex);
        return newIndex;
      });
    } else {
      localStorage.removeItem("timer");
      navigate("/results");
    }
  }, [currentQuestionIndex, questions, resetTimer, updateLocalStorage, navigate]);

  // Handle answer selection
  const handleAnswerSelected = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(moveToNextQuestion, 100);
  };

  // Handle timer up event
  const handleTimeUp = () => {
    setTimeout(moveToNextQuestion, 500);
  };

  return (
    currentQuestion && (
      <div className="pb-5">
        <Timer onTimeUp={handleTimeUp} time={time} setTime={setTime} />
        <QuizQuestion
          questionData={currentQuestion}
          onAnswerSelected={handleAnswerSelected}
        />
      </div>
    )
  );
};

export default MainQuizPage;
