import React from 'react';
import * as styles from './styles.module.css';

function Tag() {
    return(
        <div className={styles.container}>
            <input type='check' className={styles.checkbox}/>
        </div>
    )
}

export default Tag;