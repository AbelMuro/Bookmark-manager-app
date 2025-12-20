import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import { ChangeTheme } from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import * as styles from './styles.module.css';

function SortButton(){
    const theme = useTypedSelector(state  => state.theme.theme);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }

    return(
        <button className={ChangeTheme(styles, 'sort', theme)} onClick={handleOpen}>
            <img />
            Sort By
            <AnimatePresence>
                {open && <motion.div 
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    exit={{scale: 0}}
                    className={ChangeTheme(styles, 'dropdown', theme)}
                    >
                        <button>
                            Recently added
                        </button>
                        <button>
                            Recently visited
                        </button>
                        <button>
                            Most visited
                        </button>
                </motion.div>}
            </AnimatePresence>
        </button>        
    )
}

export default SortButton;