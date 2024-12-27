import { ReactNode } from "react";

export type TAlertType = "info" | "error" | "success";

export interface IAlert {
    type: TAlertType;
    message: string;
}

export interface IAlertContext {
    showAlert: (alert: IAlert) => void;
}

export interface IAlertContextProps {
    children: ReactNode;
}

export interface IAlertProps {
    type?: TAlertType;
    title?: string;
    children?: ReactNode;
    [key: string]: any;
}
  