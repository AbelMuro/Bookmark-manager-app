import React from 'react';
import { useTypedSelector } from '~/Store';
import { ChangeTheme } from '~/Common/functions';
import * as styles from './styles.module.css';

function ResetButton() {
    const theme = useTypedSelector(state => state.theme.theme);

    return(
        <button className={ChangeTheme(styles, 'reset', theme)}>
            Reset
        </button>
    )
}

export default ResetButton;