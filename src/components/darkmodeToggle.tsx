import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { forwardRef, useEffect, useState } from "react";

const DarkModeToggle = forwardRef<
    HTMLButtonElement, // The ref type, assuming it forwards to the button
    React.ComponentPropsWithoutRef<typeof Button> // Inherit props from Button
>((props, ref) => {
    const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark");
        setTheme(isDarkMode ? "dark" : "light");
    }, []);

    useEffect(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);
        document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    }, [theme]);

    return (
        <Button
            {...props}
            variant="default"
            className={"bg-transparent size-8 text-primary shadow-none"}
            onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
            }}
            ref={ref}
        >
            {theme === "dark" ? <Moon /> : <Sun />}
        </Button>
    );
});

export { DarkModeToggle };
