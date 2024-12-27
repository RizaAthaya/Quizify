import { ReactNode } from "react";

export type TQuizType = "multiple" | "boolean" | "any"
export type TQuizDifficulty = "easy" | "medium" | "hard" | "any"

export interface ICategory {
    id: number;
    name: string;
}

export interface IQuizParams {
    amount?: number;
    category?: number;
    difficulty?: TQuizDifficulty;
    type?: TQuizType;
    token?: string;
}

export interface IQuizProps {
    children: ReactNode;
}

export interface IQuizContext {
    categories: ICategory[]
    questions: any[]
    setQuestions: React.Dispatch<React.SetStateAction<any>>
}

export interface IQuizSettingsContext {
    selectedCategory: number;
    setSelectedCategory: React.Dispatch<React.SetStateAction<number>>;
    selectedType: TQuizType;
    setSelectedType: React.Dispatch<React.SetStateAction<TQuizType>>;
    selectedDifficulty: TQuizDifficulty;
    setSelectedDifficulty: React.Dispatch<React.SetStateAction<TQuizDifficulty>>;
    numQuestions: number;
    setNumQuestions: React.Dispatch<React.SetStateAction<number>>;
    token: string;
    setToken: React.Dispatch<React.SetStateAction<string>>;
}