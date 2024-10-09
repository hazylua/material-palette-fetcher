import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState<string | null>(null);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        setTheme(storedTheme);
        console.log(storedTheme);
    }, []);

    return (
        <div className="flex items-center justify-end">
            <label
                htmlFor="theme-switcher"
                className="p-2 cursor-pointer hover:bg-primaryContainer hover:text-onPrimaryContainer"
            >
                {theme === "light" ? (
                    <SunIcon id="theme-moon" />
                ) : theme === "dark" ? (
                    <MoonIcon id="theme-sun" />
                ) : null}
            </label>
        </div>
    );
};

export default ThemeSwitcher;
