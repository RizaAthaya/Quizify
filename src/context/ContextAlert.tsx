import React, { createContext, useContext, useState } from "react";
import Alert from "../components/shared/Alert";
import { AlertContextType, AlertProviderProps, AlertState } from "../types/alert.types";

const AlertContext = createContext<AlertContextType | null>(null);

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [alert, setAlert] = useState<AlertState | null>(null);

  const showAlert = ({ type = "error", message }: AlertState) => {
    setAlert({ type, message });
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}

      {alert && (
        <div
          className="fixed top-4 right-4 z-50 max-w-sm"
          aria-live="assertive"
          role="alert"
        >
          <Alert type={alert.type} title={alert.type === "success" ? "Success!" : "Error!"}>
            {alert.message}
          </Alert>
        </div>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};
