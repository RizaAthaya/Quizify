import UserMenu from "../layout/UserMenu";
import { QuestionMarkCircleIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
    const user = {
        avatar: "https://picsum.photos/200",
        name: "Riza Athaya",
    }

    const menuItems = [
        { label: "Sign out", onClick: () => console.log("sign out") },
    ];

    return (
        <nav className="bg-white border-gray-200 border-b h-fit">
            <div className="max-w-screen-xl flex justify-between items-center mx-auto p-4">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <QuestionMarkCircleIcon className="w-8 h-8 text-blue-500" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        Quizify
                    </span>
                </a>

                {/* User Menu*/}
                <div className="flex items-center space-x-3">
                    <UserMenu user={user} menuItems={menuItems} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;