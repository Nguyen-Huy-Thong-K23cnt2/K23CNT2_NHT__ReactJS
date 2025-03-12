import React from "react";
import { useNhtTheme } from "../context/NhtThemeContext";

export default function NhtThemeToggle() {
    const { theme, toggleTheme } = useNhtTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? "🌞 Chế độ Sáng" : "🌙 Chế độ Tối"}
        </button>
    );
}