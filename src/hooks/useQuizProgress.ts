import { useCallback } from "react";
import { handleEncrypt } from "../utils/hash";
import { IQuestion } from "../types/question.types";

export const useQuizProgress = (
    questions: IQuestion[],
    token: string,
    score: number,
    answered: number,
    selectedCategory: number,
    selectedDifficulty: string,
    selectedType: string
  ) => {
    const updateLocalStorage = useCallback(
      (newIndex: number) => {
        const updatedData = handleEncrypt({
          token,
          num: newIndex,
          score,
          answered,
          totalQuestion: questions.length,
          category: selectedCategory,
          difficulty: selectedDifficulty,
          type: selectedType,
          questions,
        });
        localStorage.setItem("quizify_data", updatedData + "");
      },
      [questions, answered, token, score, selectedCategory, selectedDifficulty, selectedType]
    );
  
    return updateLocalStorage;
  };
  