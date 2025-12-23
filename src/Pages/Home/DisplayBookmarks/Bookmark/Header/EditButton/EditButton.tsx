import React, {useState, useContext, useEffect} from 'react';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import ArchivedDropdown from './ArchivedDropdown';
import UnarchivedDropdown from './UnarchivedDropdown';
import { useTypedSelector } from '~/Store';
import { ChangeTheme } from '~/Common/functions';
import {AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function EditButton() {
    const [open, setOpen] = useState(false);
    const theme = useTypedSelector(state => state.theme.theme);
    const {archived} = useContext(BookmarkContext);

    const chooseDropdown = () => {
        if(archived === 0)
            return (<UnarchivedDropdown handleOpen={handleOpen}/> )
        else
            return (<ArchivedDropdown handleOpen={handleOpen}/>)
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <button onClick={handleOpen} className={ChangeTheme(styles, 'button', theme)}>
                <img />
            </button>   
            <AnimatePresence>
                {open && chooseDropdown()}                 
            </AnimatePresence>
                 
        </>

    )
}

export default EditButton;