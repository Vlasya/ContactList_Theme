import React from 'react';
import {ButtonUI} from "../../ui/components/ButtonUI";

export function Button({text, action}) {
    function onAction() {
        action && action()
    }

    return (
        <ButtonUI onClick={onAction}>{text && text}</ButtonUI>
    );
}

