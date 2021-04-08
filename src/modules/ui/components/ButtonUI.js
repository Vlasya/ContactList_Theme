import React from 'react';
import {useThemeStyles} from "../theme/hooks/useThemeStyles";

export function ButtonUI({children,...props}) {
    const styles=useThemeStyles()
    return (
        <button style={styles.button} {...props}>{children}</button>
    );
}

