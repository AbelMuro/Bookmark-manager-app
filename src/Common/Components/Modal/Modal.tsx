import React, {ReactNode} from 'react';
import {motion, AnimatePresence, LayoutGroup} from 'framer-motion';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import * as styles from './styles.module.css';

type Props = {
    open: boolean,    
    children: ReactNode,
}


function Modal({open, children} : Props) {
    const theme = useTypedSelector(state  => state.theme.theme);
    
    return(
        <AnimatePresence>
            {open && 
            <LayoutGroup>
                <motion.div 
                    className={styles.layout}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <motion.dialog 
                        layout
                        open={true} 
                        className={ChangeTheme(styles, 'dialog', theme)}
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{type: 'spring'}}
                        exit={{scale: 0}}
                        >
                        {children}
                    </motion.dialog>
                </motion.div>
            </LayoutGroup>
            }            
        </AnimatePresence>
    )
}

export default Modal;
