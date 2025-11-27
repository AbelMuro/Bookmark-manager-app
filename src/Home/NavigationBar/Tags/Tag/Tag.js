import React from 'react';
import Checkbox from './Checkbox';
import * as styles from './styles.module.css';

function Tag() {
    return(
        <div className={styles.container}>
            <div className={styles.group}>
                <Checkbox/>
                <p className={styles.tag_name}>
                    AI
                </p>                
            </div>
            <div className={styles.tag_count}>
                1
            </div>
        </div>
    )
}

export default Tag;