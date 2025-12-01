import React from 'react';
import { useTypedSelector } from '../../../../Store';
import {ChangeTheme} from '../../../../Common/functions';
import Checkbox from './Checkbox';
import * as styles from './styles.module.css';

function Tag() {
    const theme = useTypedSelector<string>(state => state.theme.theme)

    return(
        <div className={styles.container}>
            <div className={styles.group}>
                <Checkbox/>
                <p className={ChangeTheme(styles, 'tag_name', theme)}>
                    AI
                </p>                
            </div>
            <div className={ChangeTheme(styles, 'tag_count', theme)}>
                1
            </div>
        </div>
    )
}

export default Tag;