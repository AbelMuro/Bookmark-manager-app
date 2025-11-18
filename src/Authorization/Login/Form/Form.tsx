import React, {ChangeEvent} from 'react';
import {motion} from 'framer-motion';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

function Form () {

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {

    }

    return (
        <motion.form layout className={styles.form} onSubmit={handleSubmit}>
            <EnterEmail/>
            <EnterPassword/>
            <motion.button layout className={styles.submit}>
                Log in
            </motion.button>
        </motion.form>
    )
}

export default Form;