import { ReactNode } from "react";

export interface Header {
    name: string;
    email?: string;
}

export interface MenuItem {
    label: string;
    onClick: () => void;
}

export interface DropdownProps {
    trigger: ReactNode;
    header?: Header;
    menuItems: MenuItem[];
}
