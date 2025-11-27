import React, {useState} from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function Checkbox() {
    const [check, setCheck] = useState<boolean>(false);

    const handleCheck = () => {
        setCheck(!check);
    }

    return(
        <div className={styles.container}>
            {check && <img className={styles.checkmark} src={icons['checkmark']}/>}
            <input type='check' className={styles.checkbox} checked={check} onClick={handleCheck}/>            
        </div>
    )
}

export default Checkbox;