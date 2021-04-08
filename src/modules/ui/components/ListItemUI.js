import React from 'react';
import {useThemeStyles} from "../theme/hooks/useThemeStyles";

export function ListItemUI({children,...props}) {
    const styles= useThemeStyles()
    return (
        <li style={styles.listItem} {...props}>{children}</li>
    );
}

