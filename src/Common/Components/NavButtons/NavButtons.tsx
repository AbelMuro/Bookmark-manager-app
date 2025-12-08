import React, {useState} from 'react';
import { useTypedSelector } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import * as styles from './styles.module.css';

function NavButtons() {
    const [selected, setSelected] = useState<string>('home');
    const theme = useTypedSelector(state  => state.theme.theme);

    const handleSelected = (option: string) => {
        setSelected(option);
    }

    const handleStyles = (option: string) => {
        if(selected === option)
            return ChangeTheme(styles, 'selected', theme);
        else
            return '';
    }

    return(
        <section className={ChangeTheme(styles, 'nav_buttons', theme)}>
            <button onClick={() => handleSelected('home')} className={handleStyles('home')}>
                <img className={ChangeTheme(styles, 'nav_buttons_icon_home', theme)}/>
                Home
            </button>
            <button onClick={() => handleSelected('archived')} className={handleStyles('archived')}>
                <img className={ChangeTheme(styles, 'nav_buttons_icon_archived', theme)}/>
                Archived
            </button>
        </section>
    )
}

export default NavButtons;