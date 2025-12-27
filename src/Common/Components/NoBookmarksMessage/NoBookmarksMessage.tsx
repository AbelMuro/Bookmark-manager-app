import React from 'react';
import { useTypedSelector } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import * as styles from './styles.module.css';

type Props = {
    message: string
}

function NoBookmarkMessage({message} : Props) {
    const theme = useTypedSelector(state => state.theme.theme);

    return(
        <div className={ChangeTheme(styles, 'empty_message', theme)}>
            {message}
        </div> 
    )
}

export default NoBookmarkMessage;