import React from 'react';
import { useTypedSelector } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import Checkbox from './Checkbox';
import * as styles from './styles.module.css';

type Props = {
    name: string,
    count: number
}

function Tag({name, count} : Props) {
    const theme = useTypedSelector(state  => state.theme.theme);

    return(
        <div className={styles.container}>
            <div className={styles.group}>
                <Checkbox name={name}/>
                <p className={ChangeTheme(styles, 'tag_name', theme)}>
                    {name}
                </p>                
            </div>
            <div className={ChangeTheme(styles, 'tag_count', theme)}>
                {count}
            </div>
        </div>
    )
}

export default Tag;