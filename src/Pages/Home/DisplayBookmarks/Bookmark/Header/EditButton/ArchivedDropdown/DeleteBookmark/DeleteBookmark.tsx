import React, {useContext} from 'react';
import {ChangeTheme} from '~/Common/functions';
import {BookmarkContext} from '~/Pages/Home/DisplayBookmarks';
import {useTypedSelector, useTypedDispatch} from '~/Store';
import * as styles from './styles.module.css';

function DeleteBookmark() {
    const theme = useTypedSelector(state => state.theme.theme);
    const dispatch = useTypedDispatch();


    return(
        <button className={ChangeTheme(styles, 'dropdown_button', theme)}>
            <img/>
            Delete bookmark
        </button>
    );
}

export default DeleteBookmark;