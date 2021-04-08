import React from 'react';
import {useTheme} from "../theme/hooks/useTheme";
import {Button} from "../../contacts/components/Button";


export function ThemeToggle() {
    const {theme, setTheme, THEMES} = useTheme()

    function onToggleTheme() {
        if (theme.name === 'light') {
            setTheme(THEMES.dark)
        } else {
            setTheme(THEMES.light)
        }
    }

    return (
        <Button text='Change Theme' action={onToggleTheme}/>
    );
}

