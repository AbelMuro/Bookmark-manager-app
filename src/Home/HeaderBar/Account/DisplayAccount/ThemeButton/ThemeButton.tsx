import React from 'react';
import {ChangeTheme} from '../../../../../Common/functions';
import {useTypedDispatch, useTypedSelector} from '../../../../../Store';
import * as styles from './styles.module.css';


function ThemeButton() {
    const dispatch = useTypedDispatch();
    const theme = useTypedSelector<string>(state => state.theme.theme);

    const handleStyles = (currentTheme : string, className: string) : string => {
        if(theme === currentTheme)
            return [ChangeTheme(styles, className, theme), styles.selected].join(' ');
        else
            return ChangeTheme(styles, className, theme);
    }
    
    const handleTheme = () => {
        dispatch({type: 'CHANGE_THEME'});
    }


    return(
        <button className={ChangeTheme(styles, 'theme', theme)} onClick={handleTheme}>
            <div className={handleStyles('light', 'theme_light')}>
                <img/>
            </div>
            <div className={handleStyles('dark', 'theme_dark')}>
                <img/>
            </div>
        </button>
    )
}

export default ThemeButton;