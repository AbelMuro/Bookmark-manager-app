import React, {useState, useEffect} from 'react';
import {useTypedDispatch, useTypedSelector} from '../../../../../Store';
import * as styles from './styles.module.css';


function ChangeTheme() {
    const dispatch = useTypedDispatch();
    const theme = useTypedSelector<string>(state => state.theme.theme);

    const handleStyles = (currentTheme : string, className: string) : string => {
        if(theme === currentTheme)
            return [styles[className], styles.selected].join(' ');
        else
            return styles[className];
    }
    
    const handleTheme = () => {
        dispatch({type: 'CHANGE_THEME'});
    }


    return(
        <button className={styles.theme} onClick={handleTheme}>
            <div className={handleStyles('light', 'theme_light')}>
                <img/>
            </div>
            <div className={handleStyles('dark', 'theme_dark')}>
                <img/>
            </div>
        </button>
    )
}

export default ChangeTheme;