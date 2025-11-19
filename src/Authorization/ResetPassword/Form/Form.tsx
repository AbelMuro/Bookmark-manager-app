import React from 'react';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

function Form() {
    return(
        <form className={styles.form}>
            <EnterPassword label={'New Password'}/>
            <EnterPassword label={'Confirm Password'}/>
        </form>
    )
}

export default Form;