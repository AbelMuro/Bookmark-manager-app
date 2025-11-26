import React from 'react';
import Tag from './Tag'
import * as styles from './styles.module.css';

function Tags() {
    return (
        <section className={styles.tags}>
            <h2 className={styles.tags_title}>
                TAGS
            </h2>
            <div className={styles.tags_tag}>
                <Tag/>
            </div>
        </section>
    )
}

export default Tags;