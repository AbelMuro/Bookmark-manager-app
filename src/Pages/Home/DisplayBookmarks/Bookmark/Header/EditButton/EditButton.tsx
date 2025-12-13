import React, {useState} from 'react';
import { useTypedSelector } from '~/Store';
import { ChangeTheme } from '~/Common/functions';
import * as styles from './styles.module.css';

function EditButton() {
    const [open, setOpen] = useState(false);
    const theme = useTypedSelector(state  => state.theme.theme);

    const handleOpen = () => {
        setOpen(!open)
    }

    return(
        <>
            <button onClick={handleOpen} className={ChangeTheme(styles, 'button', theme)}>
                <img />
            </button>   
            <div className={ChangeTheme(styles, 'dropdown', theme)}>
                
            </div>                  
        </>

    )
}

export default EditButton;