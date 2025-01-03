export type TQuestionType = "multiple" | "boolean"

export interface IQuestion {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: TQuestionType;
}

export interface IQuizQuestionProps {
    questionData: IQuestion;
    onAnswerSelected: (isCorrect: boolean) => void;
}
