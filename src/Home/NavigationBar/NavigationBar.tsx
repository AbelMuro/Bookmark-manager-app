import React from 'react';
import { useTypedSelector } from '../../Store';
import {ChangeTheme} from '../../Common/functions'
import NavButtons from './NavButtons';
import Tags from './Tags';
import * as styles from './styles.module.css';

function NavigationBar() {
    const theme = useTypedSelector<string>(state => state.theme.theme);

    return(
        <nav className={ChangeTheme(styles, 'nav', theme)}>
            <img className={ChangeTheme(styles, 'nav_logo', theme)}/>
            <NavButtons/>
            <Tags/>
        </nav>
    )
}

export default NavigationBar;