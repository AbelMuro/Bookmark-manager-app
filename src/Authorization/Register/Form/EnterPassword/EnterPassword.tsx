import React, {useState, ChangeEvent} from 'react';
import { ChangeTheme } from '../../../../Common/functions';
import { useTypedSelector } from '../../../../Store';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function EnterPassword() {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const theme = useTypedSelector<string>(state => state.theme.theme);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.setCustomValidity('');
        setError('');
        setEmail(e.target.value);
    }

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const isEmpty = e.target.validity.valueMissing;
        const patternMismatch = e.target.validity.patternMismatch;

        if(isEmpty)
            setError('empty');
        else if(patternMismatch)
            setError('invalid')
        
    }

    const handleInvalid = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.setCustomValidity(' ');
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty')
        else   
            setError('invalid');
    }

    return(
        <motion.fieldset layout className={styles.container}>
            <motion.label layout className={ChangeTheme(styles, 'label', theme)}>
                Password <span>*</span>
            </motion.label>
            <motion.input 
                layout
                pattern='.{8,}'
                style={error ? {borderColor: '#CB0A04'} : {}}
                name='password'
                type='password' 
                value={email}                
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                className={ChangeTheme(styles, 'input', theme)} 
                required/>
            {
                error === 'empty' && 
                    <motion.div 
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        className={styles.errorMessage}>
                        Can't be empty.
                    </motion.div>
            }
            {
                error === 'invalid' && 
                    <motion.div 
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        className={styles.errorMessage}>
                            Must be at least 8 characters long.
                    </motion.div>
            }
        </motion.fieldset>
    )
}

export default EnterPassword;