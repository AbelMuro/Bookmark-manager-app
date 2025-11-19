import React, {useState, ChangeEvent} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function EnterPassword() {
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError('');
        setPassword(e.target.value);
    }

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty')
    }

    const handleInvalid = (e: ChangeEvent<HTMLInputElement>) => {
        const isEmpty = e.target.validity.valueMissing;
        
        if(isEmpty)
            setError('empty');
        else
            setError('pattern');
    }

    return(
        <motion.fieldset layout className={styles.container}>
            <motion.label layout className={styles.label}>
                Password
            </motion.label>
            <motion.input 
                layout
                name='password'
                type='password' 
                style={error ? {borderColor: '#CB0A04'} : {}}
                className={styles.password}
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                required
                />
            {error === 'empty' && 
                <motion.div 
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    layout 
                    className={styles.errorMessage}>
                    Can't be empty.
                </motion.div>
            }
            {error === 'length' && 
                <motion.div 
                    initial={{scale: 0}}
                    animate={{scale: 1}}
                    layout 
                    className={styles.errorMessage}>
                    Must be at least 8 characters long.
                </motion.div>
            }
        </motion.fieldset>
    )
}

export default EnterPassword;