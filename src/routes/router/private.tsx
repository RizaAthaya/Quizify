import MainLayout from "../../layouts/MainLayout";
import Dashboard from "../../pages/Dashboard";
import QuestionQuiz from "../../pages/quiz/QuestionQuiz";

export const privateRoutes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard />
            },
            {
                path: 'quiz',
                element: <QuestionQuiz />
            },
        ]
    }
];