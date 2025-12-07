import React from 'react';
import * as styles from './styles.module.css';

function Grid({children}) {
    return (
        <section className={styles.grid}>
            {children}
        </section>
    )
}

export default Grid;