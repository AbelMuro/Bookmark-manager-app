import React from 'react';
import {ChangeTheme} from '../../../../Common/functions';
import { useTypedSelector } from '../../../../Store';
import * as styles from './styles.module.css';

function Tags() {
    const theme = useTypedSelector<string>(state => state.theme.theme);

    return(
        <div className={styles.bookmark_tags}>
            <div className={ChangeTheme(styles, 'bookmark_tag', theme)}>
                Practice
            </div>  
            <div className={ChangeTheme(styles, 'bookmark_tag', theme)}>
                Learning
            </div>
        </div>
    )
}

export default Tags;