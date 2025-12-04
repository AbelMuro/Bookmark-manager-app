import React from 'react';
import EnterTitle from './EnterTitle';
import EnterDescription from './EnterDescription';
import EnterURL from './EnterURL';
import * as styles from './styles.module.css';

function Form () {
    return(
        <form className={styles.form}>
            <EnterTitle/>
            <EnterDescription/>
            <EnterURL/>
        </form>
    )
}

export default Form;