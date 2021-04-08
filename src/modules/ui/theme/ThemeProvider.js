import React, {useState, useMemo} from 'react';
import {ThemeContext} from "./ThemeContext";
import {THEMES} from "./themeStyles";


export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(THEMES.dark);
    const value = useMemo(() => ({
        theme, setTheme, THEMES
    }), [theme, setTheme]);

    return (
        <ThemeContext.Provider value={value}>{children} </ThemeContext.Provider>
    );
}

