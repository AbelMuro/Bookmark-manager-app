import React, {memo} from 'react';
import { useTypedSelector } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import * as styles from './styles.module.css';

function Search() {
    const theme = useTypedSelector(state  => state.theme.theme);

    return(
        <form className={styles.container}>
            <img className={ChangeTheme(styles, 'search_icon', theme)}/>
            <input 
                type='text' 
                className={ChangeTheme(styles, 'search', theme)}
                placeholder={'Search by title...'}
                />
        </form>
    )
}

export default memo(Search);