import React from 'react';
import SortButton from './SortButton';
import { useTypedSelector } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import Bookmark from './Bookmark';
import * as styles from './styles.module.css';

function DisplayBookmarks() {
    const theme = useTypedSelector(state  => state.theme.theme);

    return(
        <section className={styles.container}>
            <h1 className={ChangeTheme(styles, 'title', theme)}>
                All bookmarks
            </h1>
            <SortButton/>
            <Bookmark/>
            <Bookmark/>
            <Bookmark/>
        </section>
    )
}

export default DisplayBookmarks;