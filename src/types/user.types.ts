import { User } from "firebase/auth";

export interface MenuItem {
    label: string;
    onClick: () => void;
}

export interface UserAvatarProps extends Partial<User> {
    avatar: string;
}

export interface UserMenuProps {
    className?: string,
    user: UserAvatarProps;
    menuItems: MenuItem[];
}
