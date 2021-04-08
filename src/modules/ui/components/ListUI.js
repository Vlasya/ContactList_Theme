import React from 'react';
import {useThemeStyles} from "../theme/hooks/useThemeStyles";

export function ListUI({children, ...props}) {
    const styles = useThemeStyles()
    return (
        <ul style={styles.list} {...props}>{children}</ul>
    );
}

