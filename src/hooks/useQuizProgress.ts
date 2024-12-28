import { useCallback } from "react";
import { handleEncrypt } from "../utils/hash";

export const useQuizProgress = (questions: any[], token: string, score: number, selectedCategory: number, selectedDifficulty: string, selectedType: string) => {
    const updateLocalStorage = useCallback(
        (newIndex: number) => {
            const updatedData = handleEncrypt({
                token,
                num: newIndex,
                score,
                totalQuestion: questions.length,
                category: selectedCategory,
                difficulty: selectedDifficulty,
                type: selectedType,
                questions,
            });
            localStorage.setItem("quizify_data", updatedData);
        },
        [questions, token, score, selectedCategory, selectedDifficulty, selectedType]
    );

    return updateLocalStorage;
};