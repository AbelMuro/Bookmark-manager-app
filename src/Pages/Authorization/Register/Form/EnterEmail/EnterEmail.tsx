import React, {useState, ChangeEvent} from 'react';
import { ChangeTheme } from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function EnterEmail(){
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const theme = useTypedSelector(state  => state.theme.theme);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.setCustomValidity('');
        setError('');
        setEmail(e.target.value);
    }

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const isEmpty = e.target.validity.valueMissing;
        const isInvalid = e.target.validity.typeMismatch;

        if(isEmpty)
            setError('empty');
        else if(isInvalid)
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
                Email address <span>*</span>
            </motion.label>
            <motion.input 
                layout
                name='email'
                type='email' 
                value={email}                
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                className={ChangeTheme(styles, 'input', theme)} 
                style={error ? {borderColor: '#CB0A04'} : {}}
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
                            Enter a valid email address.
                    </motion.div>
            }
        </motion.fieldset>
    )
}

export default EnterEmail;