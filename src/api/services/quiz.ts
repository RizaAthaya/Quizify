import { QuestionsParams } from "../../types/quiz.types";
import axiosInstance from "../opendb";

export const getToken = async (): Promise<string> => {
    const response = await axiosInstance.get("api_token.php?command=request");
    if (response.data.response_code === 0) {
        return response.data.token;
    }
    throw new Error("Failed to fetch token");
};

export const getCategories = async (): Promise<{ id: number; name: string }[]> => {
    const response = await axiosInstance.get("api_category.php");
    return response.data.trivia_categories;
};

export const getQuestions = async (params?: QuestionsParams): Promise<any[]> => {
    const { amount = 10, category, difficulty, type, token } = params || {};
    const query = new URLSearchParams();

    query.append("amount", String(amount));
    if (category && category !== 0) query.append("category", String(category));
    if (difficulty && difficulty !== "any") query.append("difficulty", difficulty);
    if (type && type !== "any") query.append("type", type);
    if (token) query.append("token", token);

    const response = await axiosInstance.get(`api.php?${query.toString()}`);
    if (response.data.response_code === 0) {
        return response.data.results;
    }
    throw new Error("Failed to fetch questions");
};