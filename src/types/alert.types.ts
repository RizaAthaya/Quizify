import { ReactNode } from "react";

export type AlertType = "info" | "error" | "success";

export interface AlertState {
    type: AlertType;
    message: string;
}

export interface AlertContextType {
    showAlert: (alert: AlertState) => void;
}

export interface AlertProviderProps {
    children: ReactNode;
}

export interface AlertProps {
    type?: AlertType;
    title?: string;
    children?: ReactNode;
    [key: string]: any;
}
  