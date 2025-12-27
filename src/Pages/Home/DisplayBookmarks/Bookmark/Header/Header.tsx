import React, {useContext} from 'react';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import BookmarkIcon from './BookmarkIcon';
import EditButton from './EditButton';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector, useTypedDispatch } from '~/Store';
import * as styles from './styles.module.css';

function Header() {
    const theme = useTypedSelector(state  => state.theme.theme);
    const dispatch = useTypedDispatch();
    const {title, url, bookmarkId, views} = useContext(BookmarkContext);

    const handleUrl = async () => {
        window.open(url);
        try{
            const response = await fetch('https://bookmark-manager-server.netlify.app/update_bookmark', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({bookmarkId, prevViews: views})
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                const event = new CustomEvent('update_bookmarks');
                document.dispatchEvent(event);
            }
            else{
                const result = await response.text();
                console.log(result);
            }

        }
        catch(error){
            const message = error.message;
            console.log(message);
        }
    }

    return(
        <div className={styles.bookmark_header}>
            <BookmarkIcon/>
            <h2 className={ChangeTheme(styles, 'bookmark_title', theme)}>
                {title}
            </h2>
            <a className={ChangeTheme(styles, 'bookmark_link', theme)} onClick={handleUrl}>
                {url}
            </a>
            <EditButton/>
        </div>
    );
}

export default Header;