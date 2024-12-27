import React, { createContext, useContext, useState } from "react";
import { useCategoriesQuery } from "../hooks/useQuiz";
import { IQuizContext, IQuizProps } from "../types/quiz.types";

const QuizContext = createContext<IQuizContext | null>(null);

export const QuizProvider: React.FC<IQuizProps> = ({ children }) => {
    const { data } = useCategoriesQuery();
    const categories = data && data || []
    const [questions, setQuestions] = useState([])

    return (
        <QuizContext.Provider value={{ categories, questions, setQuestions }}>
            {children}
        </QuizContext.Provider>
    );
};

export const useQuiz = () => {
    const context = useContext(QuizContext);
    if (!context) {
        throw new Error("useQuiz must be used within a QuizProvider");
    }
    return context;
};
