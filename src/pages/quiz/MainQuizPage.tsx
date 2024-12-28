import React, { useState, useCallback } from "react";
import Timer from "../../components/shared/Timer";
import QuizQuestion from "../../components/features/quiz/QuizQuestion";
import { useQuizQuestions } from "../../hooks/useQuiz";
import { useQuizSettings } from "../../context/QuizSettingsContext";
import { useNavigate } from "react-router-dom";
import useSavedData from "../../hooks/useSavedData";
import { useTimer } from "../../hooks/useTimer";
import { useQuizProgress } from "../../hooks/useQuizProgress";
import LoadingPage from "../fallback/LoadingPage";

const MainQuizPage: React.FC = () => {
  // Timer 
  const initialTime = localStorage.getItem("timer") ? Number(localStorage.getItem("timer")) : 60;
  const { time, setTime, resetTimer } = useTimer(initialTime);

  // get old questions from localtorage
  const savedData = useSavedData();
  const localQuestions = localStorage.getItem("quizify_data") ? savedData.questions : null;

  // state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(savedData.num);
  const [score, setScore] = useState<number>(savedData.score);
  const [answered, setAnswered] = useState<number>(savedData.answered);

  // Get question props 
  const { selectedCategory, selectedType, selectedDifficulty, numQuestions, token } = useQuizSettings();

  // fecthing new questions 
  const fetchedQuestions = useQuizQuestions({
    amount: numQuestions,
    category: selectedCategory,
    difficulty: selectedDifficulty,
    type: selectedType,
    token: token,
  });
  const questions = React.useMemo(() => localQuestions || fetchedQuestions.data, [localQuestions, fetchedQuestions]);
  const currentQuestion = questions?.[currentQuestionIndex];

  const navigate = useNavigate();

  // Local storage 
  const updateLocalStorage = useQuizProgress(
    questions,
    token,
    score,
    answered,
    selectedCategory,
    selectedDifficulty,
    selectedType
  );

  // next question
  const moveToNextQuestion = useCallback(() => {
    resetTimer();

    if (questions && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex: number) => {
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


  // Handle times up
  const handleTimeUp = () => {
    setAnswered(answered + 1)
    setTimeout(moveToNextQuestion, 500);
  };

  // isloading 
  if (fetchedQuestions.isPending) {
    return <LoadingPage />;
  }

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
