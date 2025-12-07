import React, {useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {useTypedDispatch, useTypedSelector} from '~/Store';
import * as styles from './styles.module.css';


function PopupMessageBox() {
    const open = useTypedSelector<boolean>(state => state.popup.open);
    const message = useTypedSelector<string>(state => state.popup.message);
    const dispatch = useTypedDispatch();

    useEffect(() => {
        if(!open) return;

        setTimeout(() => {
            dispatch({type: 'HIDE_POPUP'});
        }, 3000)
    }, [open])

    return (
        <AnimatePresence>
            {
            open &&
                <motion.div 
                    className={styles.container}
                    initial={{bottom: -200}}
                    animate={{bottom: 40}}
                    exit={{bottom: -200}}
                    transition={{type: 'spring'}}
                    >
                       {message}
                        <button className={styles.close}>
                            X
                        </button>
                </motion.div>}            
        </AnimatePresence>
    )
}

export default PopupMessageBox;