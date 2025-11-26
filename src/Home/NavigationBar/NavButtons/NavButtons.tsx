import React, {useState} from 'react';
import * as styles from './styles.module.css';

function NavButtons() {
    const [selected, setSelected] = useState<string>('home');

    const handleSelected = (option: string) => {
        setSelected(option);
    }

    const handleStyles = (option: string) => {
        if(selected === option)
            return styles.selected;
        else
            return '';
    }

    return(
        <section className={styles.nav_buttons}>
            <button onClick={() => handleSelected('home')} className={handleStyles('home')}>
                <img className={styles.nav_buttons_icon_home}/>
                Home
            </button>
            <button onClick={() => handleSelected('archived')} className={handleStyles('archived')}>
                <img className={styles.nav_buttons_icon_archived}/>
                Archived
            </button>
        </section>
    )
}

export default NavButtons;