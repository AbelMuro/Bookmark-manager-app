import React from 'react';
import Header from './Header';
import Tags from './Tags';
import Misc from './Misc';
import * as styles from './styles.module.css';

function Bookmark() {
    return(
        <article className={styles.bookmark}>
            <Header/>

            <hr className={styles.bookmark_line}/>
            <p className={styles.bookmark_desc}>
                Improve your front-end coding skills by building real projects. 
                Solve real-world HTML, CSS and JavaScript challenges whilst 
                working to professional designs.
            </p>

            <Tags/>

            <hr className={styles.bookmark_line}/>
            <Misc/>

        </article>
    )
}

export default Bookmark;