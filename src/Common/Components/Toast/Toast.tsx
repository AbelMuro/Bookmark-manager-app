import React, {useEffect} from 'react';
import {ChangeTheme} from '~/Common/functions';
import {motion, AnimatePresence} from 'framer-motion';
import {useTypedDispatch, useTypedSelector} from '~/Store';
import * as styles from './styles.module.css';

function Toast() {
    const open = useTypedSelector<boolean>(state => state.toast.open);
    const message = useTypedSelector<string>(state => state.toast.message);
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
                    initial={{right: '-400px'}}
                    animate={{right: '40px'}}
                    exit={{right: '-400px'}}
                    transition={{duration: 0.7}}
                    >
                        <img className={ChangeTheme(styles, 'check', theme)}/>
                       {message}
                        <button className={ChangeTheme(styles, 'close', theme)} onClick={handleClose}>
                            <img />
                        </button>
                </motion.div>}            
        </AnimatePresence>
    )
}

export default Toast;