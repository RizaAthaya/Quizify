import { UserMenuProps } from "../../types/user.types";
import Dropdown from "../shared/Dropdown";

const UserMenu: React.FC<UserMenuProps> = ({ user, menuItems, className, ...rest }) => (
  <Dropdown
    trigger={<img className={`w-9 h-9 rounded-full border border-blue-500 ${className}`} src={user.avatar} alt="user avatar" {...rest} />}
    header={user}
    menuItems={menuItems}
/>
);

export default UserMenu;
