import React, {useState} from 'react';
import Form from './Form';
import Dialog from '~/Common/Components/Dialog';
import {motion} from 'framer-motion';
import { useTypedSelector } from '~/Store';
import { ChangeTheme } from '~/Common/functions';
import * as styles from './styles.module.css';

function EditButton() {
    const [open, setOpen] = useState(false);
    const theme = useTypedSelector(state  => state.theme.theme);

    const handleOpen = () => {
        setOpen(!open)
    }

    return(
        <>
            <button onClick={handleOpen} className={ChangeTheme(styles, 'button', theme)}>
                <img />
            </button>        
            <Dialog open={open}>
                <motion.button layout className={ChangeTheme(styles, 'close', theme)} onClick={handleOpen}>
                    <img />
                </motion.button>
                <motion.div
                    layout 
                    className={styles.header}
                    >
                    <h1 className={ChangeTheme(styles, 'title', theme)}>
                        Edit bookmark
                    </h1>
                    <p className={ChangeTheme(styles, 'desc', theme)}>
                        Update your saved link details — change the title, description, URL, or tags anytime.
                    </p>
                </motion.div>
                <Form setOpen={setOpen}/>
            </Dialog>
                
        </>

    )
}

export default EditButton;