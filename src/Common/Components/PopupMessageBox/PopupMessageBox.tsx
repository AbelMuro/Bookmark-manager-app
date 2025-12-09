import React, {useEffect} from 'react';
import {ChangeTheme} from '~/Common/functions';
import {motion, AnimatePresence} from 'framer-motion';
import {useTypedDispatch, useTypedSelector} from '~/Store';
import * as styles from './styles.module.css';


function PopupMessageBox() {
    const open = useTypedSelector<boolean>(state => state.popup.open);
    const message = useTypedSelector<string>(state => state.popup.message);
    const theme = useTypedSelector<string>(state => state.theme.theme);
    const dispatch = useTypedDispatch();

    const handleClose = () => {
        dispatch({type: 'HIDE_POPUP'});
    }

    useEffect(() => {
        if(!open) return;

        setTimeout(() => {
            dispatch({type: 'HIDE_POPUP'});
        }, 7000)
    }, [open])

    return (
        <AnimatePresence>
            {
            open &&
                <motion.div 
                    className={ChangeTheme(styles, 'container', theme)}
                    initial={{bottom: -200}}
                    animate={{bottom: 40}}
                    exit={{bottom: -200}}
                    transition={{type: 'spring'}}
                    >
                       {message}
                        <button className={ChangeTheme(styles, 'close', theme)} onClick={handleClose}>
                            <img />
                        </button>
                </motion.div>}            
        </AnimatePresence>
    )
}

export default PopupMessageBox;