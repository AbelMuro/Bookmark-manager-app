import React, {useState} from 'react';
import { ChangeTheme } from '../../../../../Common/functions';
import { useTypedSelector } from '../../../../../Store';
import icons from './icons';
import * as styles from './styles.module.css';

function Checkbox() {
    const [check, setCheck] = useState<boolean>(false);
    const theme = useTypedSelector<string>(state => state.theme.theme);

    const handleCheck = () => {
        setCheck(!check);
    }

    return(
        <div className={styles.container}>
            {check && <img className={styles.checkmark} src={icons['checkmark']}/>}
            <input type='check' className={ChangeTheme(styles, 'checkbox', theme)} checked={check} onClick={handleCheck}/>            
        </div>
    )
}

export default Checkbox;