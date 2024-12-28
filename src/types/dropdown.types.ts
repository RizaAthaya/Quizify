import { User } from "firebase/auth";
import { ReactNode } from "react";

export interface IMenuItem {
    label: string;
    onClick: () => void;
}

export interface IDropdownProps {
    trigger: ReactNode;
    header?: Partial<User>;
    menuItems: IMenuItem[];
    className?: string
}
