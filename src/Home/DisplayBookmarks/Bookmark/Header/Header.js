import React from 'react';
import * as styles from './styles.module.css';

function Header() {
    return(
        <div className={styles.bookmark_header}>
            <img className={styles.bookmark_icon}/>
            <h2 className={styles.bookmark_title}>
                Frontend Mentor
            </h2>
            <a className={styles.bookmark_link}>
                frontendmentor.io
            </a>
            <button className={styles.bookmark_edit}>
                <img />
            </button>
        </div>
    );
}

export default Header;