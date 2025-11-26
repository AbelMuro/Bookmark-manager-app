import React from 'react';
import NavButtons from './NavButtons';
import Tags from './Tags';
import * as styles from './styles.module.css';

function NavigationBar() {
    return(
        <nav className={styles.nav}>
            <img className={styles.nav_logo}/>
            <NavButtons/>
            <Tags/>
        </nav>
    )
}

export default NavigationBar;