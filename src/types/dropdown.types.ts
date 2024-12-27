import { User } from "firebase/auth";
import { ReactNode } from "react";

export interface MenuItem {
    label: string;
    onClick: () => void;
}

export interface DropdownProps {
    trigger: ReactNode;
    header?: Partial<User>;
    menuItems: MenuItem[];
    className?: string
}
