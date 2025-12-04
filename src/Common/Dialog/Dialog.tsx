import React, {ReactNode} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ChangeTheme} from '../functions';
import { useTypedSelector } from '../../Store';
import * as styles from './styles.module.css';

type Props = {
    open: boolean,    
    children: ReactNode,
}


function Dialog({open, children} : Props) {
    const theme = useTypedSelector<string>(state => state.theme.theme);
    
    return(
        <AnimatePresence>
            {open && 
                <motion.div 
                    className={styles.container}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    >
                    <motion.dialog 
                        open={true} 
                        className={ChangeTheme(styles, 'dialog', theme)}
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{type: 'spring'}}
                        exit={{scale: 0}}
                        >
                        {children}
                    </motion.dialog>
                </motion.div>}            
        </AnimatePresence>

    )
}

export default Dialog;
