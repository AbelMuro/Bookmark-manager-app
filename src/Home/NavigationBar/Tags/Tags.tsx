import React from 'react';
import { useTypedSelector } from '../../../Store';
import {ChangeTheme} from '../../../Common/functions';
import Tag from './Tag'
import * as styles from './styles.module.css';

function Tags() {
    const theme = useTypedSelector<string>(state => state.theme.theme);

    return (
        <section className={ChangeTheme(styles, 'tags', theme)}>
            <h2 className={ChangeTheme(styles, 'tags_title', theme)}>
                TAGS
            </h2>
            <div className={styles.tags_tag}>
                <Tag/>
            </div>
        </section>
    )
}

export default Tags;