import React, { createContext, useContext, useEffect, useState } from "react";
import { TQuizType, IQuizProps, IQuizSettingsContext, TQuizDifficulty } from "../types/quiz.types";
import useSavedData from "../hooks/useSavedData";
import { getToken } from "../api/services/quiz";

const QuizSettingsContext = createContext<IQuizSettingsContext | undefined>(undefined);

export const QuizSettingsProvider: React.FC<IQuizProps> = ({ children }) => {
  const savedData = useSavedData();

  // states 
  const [selectedCategory, setSelectedCategory] = useState<number>(savedData.category ? savedData.category : 0);
  const [selectedType, setSelectedType] = useState<TQuizType>(savedData.type);
  const [selectedDifficulty, setSelectedDifficulty] = useState<TQuizDifficulty>(savedData.difficulty);
  const [numQuestions, setNumQuestions] = useState<number>(savedData.amount);
  const [token, setToken] = useState<string>(savedData.token);

  useEffect(() => {
    const fetchToken = async () => {
      if (!savedData.token) {
        const newToken = await getToken();
        setToken(newToken);
      }
    };

    fetchToken();
  }, []);

  return (
    <QuizSettingsContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedType,
        setSelectedType,
        selectedDifficulty,
        setSelectedDifficulty,
        numQuestions,
        setNumQuestions,
        token,
        setToken
      }}
    >
      {children}
    </QuizSettingsContext.Provider>
  );
};

export const useQuizSettings = (): IQuizSettingsContext => {
  const context = useContext(QuizSettingsContext);
  if (!context) {
    throw new Error("useQuizSettings must be used within a QuizSettingsProvider");
  }
  return context;
};
