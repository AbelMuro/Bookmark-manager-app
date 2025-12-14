import React, {useState} from 'react';
import Form from './Form';
import Modal from '~/Common/Components/Modal';
import {motion} from 'framer-motion';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import * as styles from './styles.module.css';

function EditBookmark() {
    const theme = useTypedSelector(state => state.theme.theme);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }
 
    return(
        <>
            <button className={ChangeTheme(styles, 'dropdown_button', theme)} onClick={handleOpen}>
                <img/>
                Edit
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
                        Edit bookmark
                    </h1>
                    <p className={ChangeTheme(styles, 'desc', theme)}>
                        Update your saved link details — change the title, description, URL, or tags anytime.
                    </p>
                </motion.div>
                <Form setOpen={setOpen}/>
            </Modal>
        </>
    )
}

export default EditBookmark;