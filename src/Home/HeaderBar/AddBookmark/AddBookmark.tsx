import React, {useState} from 'react';
import { ChangeTheme } from '../../../Common/functions';
import { useTypedSelector } from '../../../Store';
import Dialog from '../../../Common/Dialog';
import Form from './Form';
import * as styles from './styles.module.css';

function AddBookmark() {
    const [open, setOpen] = useState(false);
    const theme = useTypedSelector<string>(state => state.theme.theme);

    const handleOpen = () => {
        setOpen(!open)
    }

    return(
        <>
            <button className={styles.button} onClick={handleOpen}>
                <span>+</span> 
                Add Bookmark
            </button>        
            <Dialog open={open}>
                <button className={ChangeTheme(styles, 'close', theme)} onClick={handleOpen}>
                    <img />
                </button>
                <div className={styles.header}>
                    <h1 className={ChangeTheme(styles, 'title', theme)}>
                        Add a bookmark
                    </h1>
                    <p className={ChangeTheme(styles, 'desc', theme)}>
                        Save a link with details to keep your 
                        collection organized. We extract the 
                        favicon automatically from the URL.
                    </p>
                </div>
                <Form/>
            </Dialog>
                
        </>

    )
}

export default AddBookmark;