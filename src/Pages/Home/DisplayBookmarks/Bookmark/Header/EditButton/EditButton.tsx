import React, {useState} from 'react';
import ArchiveButton from './ArchiveButton';
import VisitButton from './VisitButton';
import PinOrUnpin from './PinOrUnpin';
import EditBookmark from './EditBookmark';
import CopyUrlButton from './CopyUrlButton';
import { useTypedSelector } from '~/Store';
import { ChangeTheme } from '~/Common/functions';
import {AnimatePresence, motion} from 'framer-motion';
import * as styles from './styles.module.css';

function EditButton() {
    const [open, setOpen] = useState(false);
    const theme = useTypedSelector(state  => state.theme.theme);

    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <button onClick={handleOpen} className={ChangeTheme(styles, 'button', theme)}>
                <img />
            </button>   
            <AnimatePresence>
                {open && 
                    <motion.div 
                        className={ChangeTheme(styles, 'dropdown', theme)}
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        exit={{scale: 0}}
                        >
                            <VisitButton handleOpen={handleOpen}/>
                            <CopyUrlButton handleOpen={handleOpen}/>
                            <PinOrUnpin handleOpen={handleOpen}/>
                            <EditBookmark/>
                            <ArchiveButton/>
                    </motion.div>
                }                 
            </AnimatePresence>
                 
        </>

    )
}

export default EditButton;