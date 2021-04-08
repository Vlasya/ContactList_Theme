import React from 'react';
import {useThemeStyles} from "../theme/hooks/useThemeStyles";

export function ContainerUI({children,...props}) {
    const styles=useThemeStyles()
    return (
        <div style={styles.container} {...props}>{children}</div>
    );
}

