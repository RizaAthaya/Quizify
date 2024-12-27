import { useQuery } from "@tanstack/react-query";
import { getCategories, getQuestions, getToken } from "../api/services/quiz";
import { IQuizParams } from "../types/quiz.types";

export const useTokenQuery = () =>
    useQuery({
        queryKey: ["sessionToken"],
        queryFn: getToken,
        staleTime: 1000 * 60 * 60,
    });

export const useCategoriesQuery = () =>
    useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 5,
    });

export const useQuestionsQuery = (params?: IQuizParams) =>
    useQuery({
        queryKey: ["questions", params],
        queryFn: () => getQuestions(params),
        staleTime: 1000 * 60 * 5, 
        retry: 2, 
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 3000), // Exponential backoff (max 3s delay)
    });
