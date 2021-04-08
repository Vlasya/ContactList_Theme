import React from 'react';
import {useThemeStyles} from "../theme/hooks/useThemeStyles";


export function WrapperUI({children, ...props}) {
    const styles=useThemeStyles()
    return <div style={styles.wrapper} {...props}>{children}</div>
}

