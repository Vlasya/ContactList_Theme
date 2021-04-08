import React from 'react';
import {useThemeStyles} from "../theme/hooks/useThemeStyles";

export function DivUi({children,...props}) {
    const styles=useThemeStyles()
    return (
        <div style={styles.div} {...props}>{children}</div>
    );
}

