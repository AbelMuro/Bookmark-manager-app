import React, {useState, useContext} from 'react';
import Dialog from '~/Common/Components/Dialog';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import * as styles from './styles.module.css';
import { useTypedSelector, useTypedDispatch } from '~/Store';
import { ChangeTheme } from '~/Common/functions';

function ArchiveOrUnarchiveButton() {
    const theme = useTypedSelector(state => state.theme.theme);
    const [open, setOpen] = useState<boolean>(false)
    const dispatch = useTypedDispatch();
    const {bookmarkId} = useContext(BookmarkContext);

    const handleOpen = () => {
        setOpen(!open);
    }

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
        <>
            <button className={ChangeTheme(styles, 'dropdown_button', theme)} onClick={handleOpen}>
                <img className={ChangeTheme(styles, 'archive', theme)}/>
                Archive
            </button>        
            <Dialog 
                title={'Archive bookmark'} 
                desc={'Are you sure you want to archive this bookmark?'} 
                submit={'Archive'} 
                submitButtonColor='#014745'
                open={open}
                handleOpen={handleOpen}
                handleSubmit={handleArchive}
                />
        </>

    )
}

export default ArchiveOrUnarchiveButton;