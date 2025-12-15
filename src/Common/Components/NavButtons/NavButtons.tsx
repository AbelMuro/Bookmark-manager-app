import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import * as styles from './styles.module.css';

function NavButtons() {
    const [selected, setSelected] = useState<string>('/');
    const theme = useTypedSelector(state  => state.theme.theme);
    const navigate = useNavigate();

    const handleSelected = (option: string) => {
        setSelected(option);
    }

    const handleStyles = (option: string) => {
        if(selected === option)
            return ChangeTheme(styles, 'selected', theme);
        else
            return '';
    }

    useEffect(() => {
        navigate(`/home${selected}`);
    }, [selected])

    return(
        <section className={ChangeTheme(styles, 'nav_buttons', theme)}>
            <button onClick={() => handleSelected('/')} className={handleStyles('/')}>
                <img className={ChangeTheme(styles, 'nav_buttons_icon_home', theme)}/>
                Home
            </button>
            <button onClick={() => handleSelected('/archived')} className={handleStyles('/archived')}>
                <img className={ChangeTheme(styles, 'nav_buttons_icon_archived', theme)}/>
                Archived
            </button>
        </section>
    )
}

export default NavButtons;