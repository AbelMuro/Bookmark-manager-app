import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function Acccount() {
    return(
        <button className={styles.account}>
            <img className={styles.account_image} src={icons['placeholder']}/>
        </button>
    )
}

export default Acccount;
