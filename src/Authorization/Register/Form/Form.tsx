import React, {ChangeEvent} from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

function Form() {

    const handleSubmit = (e: ChangeEvent<HTMLFormElement> ) => {

    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <EnterName/>
            <EnterEmail/>
            <EnterPassword/>
            <button className={styles.submit}>
                Create account
            </button>
        </form>
    )
}

export default Form;