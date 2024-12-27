export interface User {
    avatar: string;
    name: string;
    email?: string;
}

export interface MenuItem {
    label: string;
    onClick: () => void;
}

export interface UserMenuProps extends Omit<React.ComponentProps<'img'>, 'src' | 'alt'> {
    user: User;
    menuItems: MenuItem[];
}