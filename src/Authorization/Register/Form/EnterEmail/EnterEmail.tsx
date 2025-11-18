import React, {useState, ChangeEvent} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function EnterEmail(){
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty')
        else   
            setError('invalid');
    }

    return(
        <motion.fieldset layout className={styles.container}>
            <motion.label layout className={styles.label}>
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
                className={styles.input} 
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