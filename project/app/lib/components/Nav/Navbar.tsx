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
        <button className="p-2 bg-black cursor-pointer group hover:bg-primaryContainer">
          <MenuIcon className="stroke-white group-hover:stroke-onPrimaryContainer" />
        </button>
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
