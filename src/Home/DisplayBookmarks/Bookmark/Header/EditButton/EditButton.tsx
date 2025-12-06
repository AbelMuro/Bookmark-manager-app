import React, {useState} from 'react';
import Form from './Form';
import Dialog from '../../../../../Common/Dialog';
import {motion} from 'framer-motion';
import { useTypedSelector } from '../../../../../Store';
import { ChangeTheme } from '../../../../../Common/functions';
import * as styles from './styles.module.css';

function EditButton() {
    const [open, setOpen] = useState(false);
    const theme = useTypedSelector<string>(state => state.theme.theme);

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
                        Save a link with details to keep your 
                        collection organized. We extract the 
                        favicon automatically from the URL.
                    </p>
                </motion.div>
                <Form/>
            </Dialog>
                
        </>

    )
}

export default EditButton;