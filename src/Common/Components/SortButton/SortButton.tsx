import React from 'react';
import { ChangeTheme } from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import * as styles from './styles.module.css';

function SortButton(){
    const theme = useTypedSelector(state  => state.theme.theme);

    return(
        <button className={ChangeTheme(styles, 'sort', theme)}>
            <img />
            Sort By
        </button>
    )
}

export default SortButton;