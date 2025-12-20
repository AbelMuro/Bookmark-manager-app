import React from 'react';
import { useTypedSelector, useTypedDispatch } from '~/Store';
import { ChangeTheme } from '~/Common/functions';
import * as styles from './styles.module.css';

function ResetButton() {
    const theme = useTypedSelector(state => state.theme.theme);
    const dispatch = useTypedDispatch();

    const handleReset = () => {
        dispatch({type: 'RESET_TAGS'})
    }

    return(
        <button className={ChangeTheme(styles, 'reset', theme)} onClick={handleReset}>
            Reset
        </button>
    )
}

export default ResetButton;