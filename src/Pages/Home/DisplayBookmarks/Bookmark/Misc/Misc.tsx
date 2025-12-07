import React from 'react';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import * as styles from './styles.module.css';

function Misc() {
    const theme = useTypedSelector(state  => state.theme.theme);

    return(
        <div className={styles.bookmark_misc}>
            <div className={styles.group}>
                <div className={ChangeTheme(styles, 'bookmark_views', theme)}>
                    <img/>
                    47
                </div>
                <div className={ChangeTheme(styles, 'bookmark_created', theme)}>
                    <img/>
                    23 Sep
                </div>
                <div className={ChangeTheme(styles, 'bookmark_calendar', theme)}>
                    <img/>
                    15 Jan
                </div>

            </div>
            <img className={ChangeTheme(styles, 'bookmark_pin', theme)}/>
        </div>
    )
}

export default Misc;