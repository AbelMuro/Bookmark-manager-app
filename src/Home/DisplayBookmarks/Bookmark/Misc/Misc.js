import React from 'react';
import * as styles from './styles.module.css';

function Misc() {
    return(
        <div className={styles.bookmark_misc}>
            <div className={styles.group}>
                <div className={styles.bookmark_views}>
                    <img/>
                    47
                </div>
                <div className={styles.bookmark_created}>
                    <img/>
                    23 Sep
                </div>
                <div className={styles.bookmark_calendar}>
                    <img/>
                    15 Jan
                </div>

            </div>
            <img className={styles.bookmark_pin}/>
        </div>
    )
}

export default Misc;