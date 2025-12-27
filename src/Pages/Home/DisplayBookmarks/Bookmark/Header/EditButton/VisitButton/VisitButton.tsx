import React, {useContext} from 'react';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import { ChangeTheme } from '~/Common/functions';
import { useTypedSelector, useTypedDispatch } from '~/Store';
import * as styles from './styles.module.css';

type Props = {
    handleOpen: Function
}

function VisitButton({handleOpen} : Props) {
    const {url, views, bookmarkId} = useContext(BookmarkContext);
    const theme = useTypedSelector(state => state.theme.theme);
    const dispatch = useTypedDispatch();

    const handleUrl = async () => {
        window.open(url);

        try{    
            const response = await fetch('https://bookmark-manager-server.netlify.app/update_bookmark', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    bookmarkId,
                    prevViews: views
                })
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
            dispatch({type: 'SHOW_POPUP', payload: message});
        }
        finally{
            handleOpen();
        }
    }

    return(
        <button className={ChangeTheme(styles, 'dropdown_button', theme)} onClick={handleUrl}>
            <img/>
            Visit
        </button>
    )
}

export default VisitButton;