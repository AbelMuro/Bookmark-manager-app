import React from 'react';
import * as styles from './styles.module.css';

function AddBookmark() {
    return(
        <button className={styles.button}>
            <span>+</span> 
            Add Bookmark
        </button>
    )
}

export default AddBookmark;