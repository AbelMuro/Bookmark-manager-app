import React from 'react';
import { useTypedSelector } from '~/Store';
import { ChangeTheme } from '~/Common/functions';
import * as styles from './styles.module.css';

function Unpin() {
    const theme = useTypedSelector(state => state.theme.theme);

    return(
        <button className={ChangeTheme(styles, 'dropdown_button', theme)}>
            <img/>
            Unpin
        </button>
    )
}

export default Unpin;