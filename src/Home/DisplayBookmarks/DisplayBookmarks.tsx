import React from 'react';
import { useTypedSelector } from '../../Store';
import {ChangeTheme} from '../../Common/functions';
import Bookmark from './Bookmark';
import * as styles from './styles.module.css';

function DisplayBookmarks() {
    const theme = useTypedSelector<string>(state => state.theme.theme);

    return(
        <section className={styles.container}>
            <h1 className={ChangeTheme(styles, 'title', theme)}>
                All bookmarks
            </h1>
            <Bookmark/>
        </section>
    )
}

export default DisplayBookmarks;