import React, {useContext} from 'react';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import { useTypedSelector, useTypedDispatch } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import * as styles from './styles.module.css';

function CopyUrlButton() {
    const theme = useTypedSelector(state => state.theme.theme);
    const dispatch = useTypedDispatch();
    const {url} = useContext(BookmarkContext);

    const handleUrl = async () => {
        await navigator.clipboard.writeText(url);
        dispatch({type: 'SHOW_POPUP', payload: 'URL has been copied to clipboard'})
    }

    return(
        <button className={ChangeTheme(styles, 'dropdown_button', theme)} onClick={handleUrl}>
            <img/>
            Copy URL
        </button>
    );
}

export default CopyUrlButton;