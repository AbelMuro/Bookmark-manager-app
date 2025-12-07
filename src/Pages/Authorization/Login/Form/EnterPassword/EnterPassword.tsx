import React, {useState, ChangeEvent} from 'react';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function EnterPassword() {
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const theme = useTypedSelector(state  => state.theme.theme);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.setCustomValidity('');
        setError('');
        setPassword(e.target.value);
    }

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty')
    }

    const handleInvalid = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.setCustomValidity(' ');
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty');
        else
            setError('pattern');
    }

    return(
        <motion.fieldset layout className={styles.container}>
            <motion.label layout className={ChangeTheme(styles, 'label', theme)}>
                Password
            </motion.label>
            <motion.input 
                layout
                name='password'
                type='password' 
                style={error ? {borderColor: '#CB0A04'} : {}}
                className={ChangeTheme(styles, 'password', theme)}
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