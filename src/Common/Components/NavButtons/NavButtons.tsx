import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTypedSelector } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import * as styles from './styles.module.css';

function NavButtons() {
    const [selected, setSelected] = useState<string>('/');
    const theme = useTypedSelector(state  => state.theme.theme);
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const handleSelected = (option: string) => {
        navigate(option);
    }

    const handleStyles = (option: string) => {
        if(selected === option)
            return ChangeTheme(styles, 'selected', theme);
        else
            return '';
    }

    useEffect(() => {
        setSelected(pathname)
    }, [pathname])


    return(
        <section className={ChangeTheme(styles, 'nav_buttons', theme)}>
            <button onClick={() => handleSelected('/home')} className={handleStyles('/home')}>
                <img className={ChangeTheme(styles, 'nav_buttons_icon_home', theme)}/>
                Home
            </button>
            <button onClick={() => handleSelected('/home/archived')} className={handleStyles('/home/archived')}>
                <img className={ChangeTheme(styles, 'nav_buttons_icon_archived', theme)}/>
                Archived
            </button>
        </section>
    )
}

export default NavButtons;