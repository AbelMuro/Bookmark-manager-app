import React, {ReactNode} from 'react';
import {ChangeTheme} from '../functions';
import { useTypedSelector } from '../../Store';
import * as styles from './styles.module.css';

type Props = {
    children: ReactNode
}


function Dialog({children} : Props) {
    const theme = useTypedSelector<string>(state => state.theme.theme);
    
    return(
        <div className={styles.container}>
            <dialog open={true} className={ChangeTheme(styles, 'dialog', theme)}>
                {children}
            </dialog>
        </div>
    )
}

export default Dialog;
