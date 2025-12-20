import React, {useContext} from 'react';
import Pin from './Pin';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import * as styles from './styles.module.css';

function Footer() {
    const theme = useTypedSelector(state  => state.theme.theme);
    const {views, createdAt, lastUpdated} = useContext(BookmarkContext);

    return(
        <div className={ChangeTheme(styles, 'bookmark_misc', theme)}>
            <div className={styles.group}>
                <div className={ChangeTheme(styles, 'bookmark_views', theme)}>
                    <img/>
                    {views}
                </div>

                <div className={ChangeTheme(styles, 'bookmark_created', theme)}>
                    <img/>
                    {createdAt}
                </div>
                <div className={ChangeTheme(styles, 'bookmark_calendar', theme)}>
                    <img/>
                    {lastUpdated || '-'}
                </div>
            </div>
            <Pin/>
        </div>
    )
}

export default Footer;