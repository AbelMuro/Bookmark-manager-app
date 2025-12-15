import React, {useContext} from 'react';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import { useTypedSelector } from '~/Store';
import { ChangeTheme } from '~/Common/functions';
import * as styles from './styles.module.css';

type Props = {
    handleOpen : Function
}

function PinOrUnpin({handleOpen} : Props) {
    const theme = useTypedSelector(state => state.theme.theme);
    const {pinned, bookmarkId} = useContext(BookmarkContext);

    const handlePin = async () => {
        try{
            const response = await fetch('http://localhost:4000/pin_bookmark', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({pin_state: !pinned, bookmarkId})
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
        finally{
            handleOpen();
        }
    }   

    return(
        <button className={ChangeTheme(styles, 'dropdown_button', theme)} onClick={handlePin}>
            {pinned ? <img className={ChangeTheme(styles, 'pinned', theme)}/> : <img className={ChangeTheme(styles, 'unpinned', theme)}/>}
            {pinned ? 'Unpin' : 'Pin'}
        </button>
    )
}

export default PinOrUnpin;