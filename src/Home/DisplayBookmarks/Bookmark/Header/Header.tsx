import React from 'react';
import {ChangeTheme} from '../../../../Common/functions';
import { useTypedSelector } from '../../../../Store';
import * as styles from './styles.module.css';

function Header() {
    const theme = useTypedSelector<string>(state => state.theme.theme);


    return(
        <div className={styles.bookmark_header}>
            <img className={styles.bookmark_icon}/>
            <h2 className={ChangeTheme(styles, 'bookmark_title', theme)}>
                Frontend Mentor
            </h2>
            <a className={ChangeTheme(styles, 'bookmark_link', theme)}>
                frontendmentor.io
            </a>
            <button className={ChangeTheme(styles, 'bookmark_edit', theme)}>
                <img />
            </button>
        </div>
    );
}

export default Header;