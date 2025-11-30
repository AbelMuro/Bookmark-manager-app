import React from 'react';
import * as styles from './styles.module.css';

function Tags() {
    return(
        <div className={styles.bookmark_tags}>
            <div className={styles.bookmark_tag}>
                Practice
            </div>  
            <div className={styles.bookmark_tag}>
                Learning
            </div>
        </div>
    )
}

export default Tags;