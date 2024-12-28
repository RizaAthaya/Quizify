import React, { useEffect, useState } from "react";
import { IQuizQuestionProps } from "../../../types/question.types";

const QuizQuestion: React.FC<IQuizQuestionProps> = ({ questionData, onAnswerSelected }) => {
    const [choices, setChoices] = useState<string[]>([]);

    useEffect(() => {
        const allChoices = [
            questionData?.correct_answer,
            ...questionData?.incorrect_answers,
        ];
        setChoices(allChoices.sort(() => Math.random() - 0.5));
    }, [questionData.question]);

    const handleChoiceClick = (choice: string) => {
        const isCorrect = choice === questionData?.correct_answer;
        onAnswerSelected(isCorrect);
    };

    const decodedText = (text: string) => { return new DOMParser().parseFromString(text, "text/html").documentElement.textContent };

    return (
        <div className="max-w-[calc(100%-32px)] lg:max-w-4xl mx-auto py-6 md:py-14 px-4 md:px-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl md:text-2xl font-semibold text-center flex items-center justify-center min-h-24 md:min-h-40 pb-6 md:pb-16">{decodedText(questionData.question)}</h2>

            {/* Options */}
            <div className="flex flex-col gap-4 justify-center">
                {choices.map((choice, index) => (
                    <div
                        key={index}
                        onClick={() => handleChoiceClick(choice)}
                        className="cursor-pointer text-lg p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                        style={{
                            backgroundColor: `hsl(${(index * 60) % 360}, 70%, 60%)`,
                        }}
                    >
                        {decodedText(choice)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuizQuestion;
