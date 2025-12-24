import React, {useContext, useState} from 'react';
import Dialog from '~/Common/Components/Dialog';
import {ChangeTheme} from '~/Common/functions';
import {BookmarkContext} from '~/Pages/Home/DisplayBookmarks';
import {useTypedSelector, useTypedDispatch} from '~/Store';
import * as styles from './styles.module.css';

function DeleteBookmark() {
    const theme = useTypedSelector(state => state.theme.theme);
    const [open, setOpen] = useState<boolean>(false);
    const {bookmarkId} = useContext(BookmarkContext);
    const dispatch = useTypedDispatch();

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleDelete = async () => {
        try{
            const response = await fetch(`https://bookmark-manager-server.netlify.app/delete_bookmark/${bookmarkId}`, {
                method: 'DELETE',
                credentials: 'include',
            })

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                dispatch({type: 'SHOW_POPUP', payload: result});
                const event = new CustomEvent('update_bookmarks');
                document.dispatchEvent(event);
                handleOpen();
            }
            else{
                const result = await response.text();
                console.log(result);
            }

        }
        catch(error){
            const message = error.message;
            console.log(message);
            dispatch({type: 'DISPLAY_POPUP', payload: message});
        }
    }

    return(
        <>
            <button className={ChangeTheme(styles, 'dropdown_button', theme)} onClick={handleOpen}>
                <img/>
                Delete bookmark
            </button>     
            <Dialog 
                title={'Delete bookmark'} 
                desc={'Are you sure you want to delete this bookmark?'} 
                submit={'Delete Permanently'} 
                submitButtonColor={'#CB0A04'}
                open={open}
                handleOpen={handleOpen}
                handleSubmit={handleDelete}
                />   
        </>

    );
}

export default DeleteBookmark;