import React from 'react';
import Bookmark from './Bookmark';
import * as styles from './styles.module.css';

function DisplayBookmarks() {
    return(
        <section className={styles.container}>
            <h1 className={styles.title}>
                All bookmarks
            </h1>
            <Bookmark/>
        </section>
    )
}

export default DisplayBookmarks;