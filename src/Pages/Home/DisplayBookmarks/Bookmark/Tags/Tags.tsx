import React, {useContext} from 'react';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector} from '~/Store';
import * as styles from './styles.module.css';

function Tags() {
    const {tags} = useContext(BookmarkContext);
    const theme = useTypedSelector(state  => state.theme.theme);


    return(
        <div className={styles.bookmark_tags}>
            {
                tags.split(',').map((tag) => {
                    return(
                        <p className={ChangeTheme(styles, 'bookmark_tag', theme)}>
                            {tag}
                        </p>  
                    )
                })
            }
        </div>
    )
}

export default Tags;