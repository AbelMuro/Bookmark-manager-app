import React, {ChangeEvent} from 'react';
import EnterEmail from './EnterEmail';
import * as styles from './styles.module.css';

function Form() {

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <EnterEmail/>
            <button className={styles.submit}>
                Send reset link
            </button>
        </form>
    )
}

export default Form;