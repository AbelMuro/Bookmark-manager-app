import React, {useState, useContext} from 'react';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import UnarchivedDropdown from './UnarchivedDropdown';
import { useTypedSelector } from '~/Store';
import { ChangeTheme } from '~/Common/functions';
import {AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function EditButton() {
    const [open, setOpen] = useState(false);
    const theme = useTypedSelector(state => state.theme.theme);
    const {archived} = useContext(BookmarkContext);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <button onClick={handleOpen} className={ChangeTheme(styles, 'button', theme)}>
                <img />
            </button>   
            <AnimatePresence>
                {open && 
                    archived === 0 ? 
                        <UnarchivedDropdown handleOpen={handleOpen}/> 
                        : 
                        <></>
                    }                 
            </AnimatePresence>
                 
        </>

    )
}

export default EditButton;