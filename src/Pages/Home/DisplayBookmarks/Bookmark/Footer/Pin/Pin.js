import React, {useContext} from 'react';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import { ChangeTheme } from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import * as styles from './styles.module.css';

function Pin() {
    const theme = useTypedSelector(state => state.theme.theme);
    const {pinned} = useContext(BookmarkContext);

    return(
        <>
            {pinned ? <img className={ChangeTheme(styles, 'bookmark_pin', theme)}/> : ''}
        </>
       
    )
}

export default Pin;