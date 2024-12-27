import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AlertProvider } from "./context/AlertContext";
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <AlertProvider>
          <RouterProvider router={router} />
        </AlertProvider>
      </UserProvider>
    </QueryClientProvider>
  )
}