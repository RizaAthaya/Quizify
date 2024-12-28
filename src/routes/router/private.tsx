import MainLayout from "../../layouts/MainLayout";
import Dashboard from "../../pages/Dashboard";
import MainQuizPage from "../../pages/quiz/MainQuizPage";
import ResultsQuizPage from "../../pages/quiz/ResultsQuizPage";

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
                element: <MainQuizPage />
            },
            {
                path: 'results',
                element: <ResultsQuizPage />
            },
        ]
    }
];