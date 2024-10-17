import { MenuIcon } from "lucide-react";
import ThemeSwitcher from "../ThemeSwitcher";
import { FC } from "react";

interface NavbarProps {
    classes?: string;
}

const Navbar: FC<NavbarProps> = ({ classes = "" }) => {
    return (
        <nav className={classes}>
            <div className="flex justify-start gap-2">
                <label
                    htmlFor="navbar-aside-menu-toggle"
                    className="p-2 bg-black cursor-pointer group hover:bg-primary"
                >
                    <MenuIcon className="stroke-white group-hover:stroke-onPrimary" />
                </label>
                <input
                    id="navbar-aside-menu-toggle"
                    type="checkbox"
                    className="hidden"
                />
                <a
                    className="h-fit bg-black px-1 py-1.5 font-mono text-xl text-white transition-all hover:ring-1 hover:ring-primary"
                    href="/"
                >
                    ://ui.utils
                </a>
            </div>
            <div></div>
            <div className="flex justify-end w-full">
                <ThemeSwitcher />
            </div>
        </nav>
    );
};

export default Navbar;
