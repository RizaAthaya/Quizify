import { useState } from "react";
import Dropdown from "../../shared/Dropdown";
import { ICategory } from "../../../types/quiz.types";
import { useQuiz } from "../../../context/QuizContext";

const CategoryDropdown: React.FC = () => {
    const { categories } = useQuiz();
    const [selectedCategory, setSelectedCategory] = useState<number>(0);

    const menuItems = [
        {
            label: "Any",
            onClick: () => setSelectedCategory(0),
        },
        ...categories.map((category: ICategory) => ({
            label: category.name,
            onClick: () => setSelectedCategory(category.id),
        })),
    ];

    const trigger = (
        <div className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-md cursor-pointer">
            {selectedCategory === 0 ? "Any Category" : categories.find((category: ICategory) => category.id === selectedCategory)?.name || "Category"}
        </div>
    );

    return (
        <div className="mb-4 flex flex-col gap-2">
            <label className="text-base lg:text-lg text-gray-700">Category</label>
            <Dropdown className="w-full max-h-48 overflow-y-auto" trigger={trigger} menuItems={menuItems} />
        </div>
    );
};

export default CategoryDropdown;
