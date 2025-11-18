import React from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import * as styles from './styles.module.css';

function Form() {
    return(
        <form className={styles.form}>
            <EnterName/>
            <EnterEmail/>
            <button className={styles.submit}>
                Create account
            </button>
        </form>
    )
}

export default Form;