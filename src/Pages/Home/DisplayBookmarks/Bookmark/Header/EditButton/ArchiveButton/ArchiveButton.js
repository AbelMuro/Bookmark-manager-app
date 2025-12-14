import React, {useContext} from 'react';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import * as styles from './styles.module.css';
import { useTypedSelector, useTypedDispatch } from '~/Store';
import { ChangeTheme } from '~/Common/functions';

function ArchiveButton() {
    const theme = useTypedSelector(state => state.theme.theme);
    const dispatch = useTypedDispatch();
    const {bookmarkId} = useContext(BookmarkContext);

    const handleArchive = async () => {
        try{
            const response = await fetch('http://localhost:4000/archive_bookmark', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    bookmarkId,
                    archived: true
                })
            })

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                dispatch({type: 'SHOW_POPUP', payload: result});
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
            dispatch({type: 'SHOW_POPUP', payload: message});
        }
    }

    return(
        <button className={ChangeTheme(styles, 'dropdown_button', theme)} onClick={handleArchive}>
            <img/>
            Archive
        </button>
    )
}

export default ArchiveButton;