import React from 'react';
import Search from './Search';
import Account from './Account';
import AddBookmark from './AddBookmark';
import * as styles from './styles.module.css';

function HeaderBar() {
    return(
        <header className={styles.header}>
            <Search/>
            <div className={styles.group}>
                <AddBookmark/>
                <Account/>
            </div>
        </header>
    )
}

export default HeaderBar;