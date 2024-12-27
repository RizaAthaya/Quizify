import React from 'react';
import QuizCategoryDropdown from './QuizCategoryDropdown';
import GroupButton from '../../shared/GroupButton';
import InputNumber from '../../shared/InputNumber';
import Button from '../../shared/Button';
import { useQuizSettings } from '../../../context/QuizSettingsContext';
import { quizTypes } from '../../../datas/quizTypes';
import { quizDifficulties } from '../../../datas/quizDifficulties';
import { useNavigate } from 'react-router-dom';

const QuizSettings: React.FC = () => {
    const {
        selectedType,
        setSelectedType,
        selectedDifficulty,
        setSelectedDifficulty,
        numQuestions,
        setNumQuestions,
    } = useQuizSettings();
    const navigate = useNavigate()

    return (
        <div className="w-full bg-white p-6 rounded-lg shadow-lg flex flex-col lg:gap-2">
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 lg:mb0 mb-2">Make Your Quiz!</h2>

            {/* Categories */}
            <QuizCategoryDropdown />

            {/* Types */}
            <GroupButton
                options={quizTypes}
                selectedValue={selectedType}
                setSelectedValue={setSelectedType}
                label="Type"
            />

            {/* Difficulties */}
            <GroupButton
                options={quizDifficulties}
                selectedValue={selectedDifficulty}
                setSelectedValue={setSelectedDifficulty}
                label="Difficulty"
            />

            {/* Number */}
            <InputNumber
                id="numQuestions"
                value={numQuestions}
                onChange={(e) => setNumQuestions(Number(e.target.value))}
                min={1}
                max={50}
                label="Number of Questions"
            />

            <Button
                variant="primary"
                onClick={() => navigate("/quiz")}
                className="w-full py-3 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
                Start Quiz
            </Button>
        </div>
    );
};

export default QuizSettings;
