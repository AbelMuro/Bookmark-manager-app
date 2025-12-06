import React, {useState, ChangeEvent} from 'react';
import {ChangeTheme} from '../../../../../Common/functions';
import { useTypedSelector } from '../../../../../Store';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function EnterTitle() {
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

        if(isEmpty)
            setError('empty');
        
    }

    const handleInvalid = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.setCustomValidity(' ');
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty')
    }

    return (
        <motion.fieldset layout className={styles.container}>
            <motion.label layout className={ChangeTheme(styles, 'label', theme)}>
                Title <span>*</span>
            </motion.label>
            <motion.input 
                layout
                name='title'
                type='text' 
                style={error ? {borderColor: '#CB0A04'} : {}}
                value={email}                
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                className={ChangeTheme(styles, 'input', theme)} 
                required/>
            {
                error === 'empty' && 
                    <motion.div 
                        layout
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        className={styles.errorMessage}>
                        Can't be empty.
                    </motion.div>
            }
        </motion.fieldset>
    )
}

export default EnterTitle;