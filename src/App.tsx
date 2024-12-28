import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AlertProvider } from "./context/AlertContext";
import { UserProvider } from "./context/UserContext";
import { QuizProvider } from "./context/QuizContext";
import { QuizSettingsProvider } from "./context/QuizSettingsContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <QuizProvider>
          <QuizSettingsProvider>
            <AlertProvider>
              <RouterProvider router={router} />
            </AlertProvider>
          </QuizSettingsProvider>
        </QuizProvider>
      </UserProvider>
    </QueryClientProvider>
  )
}