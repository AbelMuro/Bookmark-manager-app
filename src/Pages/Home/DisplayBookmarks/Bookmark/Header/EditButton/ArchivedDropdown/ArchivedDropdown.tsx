import React from 'react';
import {motion} from 'framer-motion';
import {ChangeTheme} from '~/Common/functions'
import { useTypedSelector } from '~/Store';
import UnarchiveButton from './UnarchiveButton';
import VisitButton from '../VisitButton';
import DeleteBookmark from './DeleteBookmark';
import CopyUrlButton from '../CopyUrlButton';
import * as styles from './styles.module.css';

type Props = {
    handleOpen: Function
}

function ArchivedDropdown({handleOpen} : Props) {
    const theme = useTypedSelector(state => state.theme.theme);

    return(
        <motion.div 
            className={ChangeTheme(styles, 'dropdown', theme)}
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            >
                <VisitButton handleOpen={handleOpen}/>
                <CopyUrlButton handleOpen={handleOpen}/>
                <UnarchiveButton/>
                <DeleteBookmark/>
        </motion.div>
    )
}

export default ArchivedDropdown;