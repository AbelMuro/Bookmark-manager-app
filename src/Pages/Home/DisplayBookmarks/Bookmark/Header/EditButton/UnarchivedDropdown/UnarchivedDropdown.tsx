import React from 'react';
import {useTypedSelector} from '~/Store';
import { ChangeTheme } from '~/Common/functions';
import { motion } from 'framer-motion';
import PinOrUnpin from './PinOrUnpin';
import EditBookmark from './EditBookmark';
import ArchiveButton from './ArchiveButton';
import VisitButton from '../VisitButton';
import CopyUrlButton from '../CopyUrlButton';
import * as styles from './styles.module.css';

type Props = {
    handleOpen: Function
}

function EditUnarchived({handleOpen} : Props) {
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
                <PinOrUnpin handleOpen={handleOpen}/>
                <EditBookmark/>
                <ArchiveButton/>
        </motion.div>
    )
}

export default EditUnarchived;