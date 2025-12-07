import React from 'react';
import Search from '~/Common/Components/Search';
import * as styles from './styles.module.css';

function MobileHeaderBar() {
    return(
        <header className={styles.header}>
            <section className={styles.header_group}>
                <button className={styles.header_menu}>

                </button>
                <Search/>
            </section>
            
        </header>
    )
}

export default MobileHeaderBar;