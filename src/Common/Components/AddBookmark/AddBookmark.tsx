import React, {useState} from 'react';
import { useMediaQuery } from '~/Hooks';
import {motion} from 'framer-motion';
import { ChangeTheme } from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import Modal from '~/Common/Components/Modal';
import Form from './Form';
import * as styles from './styles.module.css';

function AddBookmark() {
    const [open, setOpen] = useState<boolean>(false);
    const theme = useTypedSelector(state  => state.theme.theme);
    const [mobile] = useMediaQuery('(max-width: 630px)');

    const handleOpen = () => {
        setOpen(!open)
    }

    return(
        <>
            <button className={ChangeTheme(styles, 'button', theme)} onClick={handleOpen}>
                <span>+</span> 
                {!mobile && 'Add Bookmark'}
            </button>        
            <Modal open={open}>
                <motion.button layout className={ChangeTheme(styles, 'close', theme)} onClick={handleOpen}>
                    <img />
                </motion.button>
                <motion.div
                    layout 
                    className={styles.header}
                    >
                    <h1 className={ChangeTheme(styles, 'title', theme)}>
                        Add a bookmark
                    </h1>
                    <p className={ChangeTheme(styles, 'desc', theme)}>
                        Save a link with details to keep your 
                        collection organized. We extract the 
                        favicon automatically from the URL.
                    </p>
                </motion.div>
                <Form setOpen={setOpen}/>
            </Modal>
                
        </>

    )
}

export default AddBookmark;