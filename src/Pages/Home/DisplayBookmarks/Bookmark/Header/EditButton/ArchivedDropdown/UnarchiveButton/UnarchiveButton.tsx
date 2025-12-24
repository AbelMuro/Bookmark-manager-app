import React, {useState, useContext} from 'react';
import Dialog from '~/Common/Components/Dialog';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import * as styles from './styles.module.css';
import { useTypedSelector, useTypedDispatch } from '~/Store';
import { ChangeTheme } from '~/Common/functions';

function UnarchiveButton() {
    const theme = useTypedSelector(state => state.theme.theme);
    const [open, setOpen] = useState<boolean>(false)
    const dispatch = useTypedDispatch();
    const {bookmarkId, archived} = useContext(BookmarkContext);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleArchive = async () => {
        try{
            const response = await fetch('https://bookmark-manager-server.netlify.app/archive_bookmark', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    bookmarkId,
                    archived: false
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
        <>
            <button className={ChangeTheme(styles, 'dropdown_button', theme)} onClick={handleOpen}>
                <img className={ChangeTheme(styles, 'unarchive', theme)}/>
                Unarchive
            </button>        
            <Dialog 
                title={'Unarchive bookmark'} 
                desc={'Move this bookmark back to your active list?'} 
                submit={'Unarchive'} 
                submitButtonColor='#014745'
                open={open}
                handleOpen={handleOpen}
                handleSubmit={handleArchive}
                />
        </>

    )
}

export default UnarchiveButton;