import { User } from "firebase/auth";
import { IMenuItem } from "./dropdown.types";

export interface IUserAvatarProps extends Partial<User> {
    avatar: string;
}

export interface IUserMenuProps {
    className?: string,
    user: IUserAvatarProps;
    menuItems: IMenuItem[];
}
