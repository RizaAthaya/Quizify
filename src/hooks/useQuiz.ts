import { useQuery } from "@tanstack/react-query";
import { getCategories, getQuestions, getToken } from "../api/services/quiz";
import { IQuizParams } from "../types/quiz.types";

export const useTokenQuery = () =>
    useQuery({
        queryKey: [""],
        queryFn: getToken,
        enabled: true,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        staleTime: Infinity,
    });

export const useCategoriesQuery = () =>
    useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
        staleTime: 1000 * 60 * 5,
    });

export const useQuizQuestions = (params?: IQuizParams) => {
    const { data, isPending } = useQuery({
        queryKey: ["questions", params],
        queryFn: () => getQuestions(params),
        enabled: true,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        staleTime: Infinity,
    });
    return { data, isPending }
};
