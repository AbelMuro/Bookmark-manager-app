import React, {useState} from 'react';
import NavButtons from '~/Common/Components/NavButtons';
import Tags from '~/Common/Components/Tags';
import {AnimatePresence, motion} from 'framer-motion';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import * as styles from './styles.module.css';

function MobileNavButton() {
    const theme = useTypedSelector(state => state.theme.theme);
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <button onClick={handleOpen} className={ChangeTheme(styles, 'nav_button', theme)}>
                <img/>
            </button>    
            <AnimatePresence>
                {
                    open &&
                    <motion.div 
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {when: 'beforeChildren'}}}
                        exit={{opacity: 0, transition: {when: 'afterChildren', delay: 0.4}}}
                        className={styles.layout}>
                        <motion.nav 
                            initial={{x: -300}}
                            animate={{x: 0}}
                            exit={{x: -300}}
                            transition={{duration: 0.3}}
                            className={ChangeTheme(styles, 'nav', theme)}>
                            <button className={ChangeTheme(styles, 'close', theme)} onClick={handleOpen}>
                                <img/>
                            </button>
                            <img className={ChangeTheme(styles, 'nav_logo', theme)}/>
                            <NavButtons/>
                            <Tags/>
                        </motion.nav>
                    </motion.div>                  
                }                
            </AnimatePresence>

 
        </>

    )
}

export default MobileNavButton;