import React from 'react';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import {motion, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css'

type Props = {
    open: boolean,
    handleOpen: Function,
    handleSubmit: Function,
    submitButtonColor: string
    title: string,
    desc: string,
    submit: string
}

function Dialog({open, handleOpen, handleSubmit, submitButtonColor, title, desc, submit} : Props) {
    const theme = useTypedSelector(state => state.theme.theme);

    return (
        <AnimatePresence>
            {
            open &&
            <motion.div 
                className={styles.overlay}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                >
                <motion.dialog 
                    open={true} 
                    className={ChangeTheme(styles, 'dialog', theme)}
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    exit={{scale: 0}}
                    >
                    <header className={styles.dialog_header}>
                        <h2 className={ChangeTheme(styles, 'dialog_title', theme)}>
                            {title}
                        </h2>
                        <p className={ChangeTheme(styles, 'dialog_desc', theme)}>
                            {desc}
                        </p>
                    </header>
                    <div className={styles.dialog_buttons}>
                        <button className={ChangeTheme(styles, 'dialog_cancel', theme)} onClick={() => handleOpen()}>
                            Cancel
                        </button>
                        <button 
                            className={ChangeTheme(styles, 'dialog_submit', theme)} 
                            onClick={() => handleSubmit()}
                            style={{backgroundColor: submitButtonColor}}
                            >
                            {submit}
                        </button>
                    </div>
                </motion.dialog>
            </motion.div>}
        </AnimatePresence>

    )
}

export default Dialog;