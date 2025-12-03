import React from 'react';
import EnterTitle from './EnterTitle';
import * as styles from './styles.module.css';

function Form () {
    return(
        <form className={styles.form}>
            <EnterTitle/>
        </form>
    )
}

export default Form;