import React, {useState, ChangeEvent} from 'react';
import { ChangeTheme } from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function Description() {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [char, setChar] = useState<number>(0); 
    const theme = useTypedSelector(state  => state.theme.theme);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const input = e.target.value;
        if(input.length > 280)
            return;
        e.target.setCustomValidity('');
        setError('');
        setEmail(input);
        setChar(input.length);
    }

    const handleBlur = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty');
        
    }

    const handleInvalid = (e: ChangeEvent<HTMLTextAreaElement>) => {
        e.target.setCustomValidity(' ');
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty')
    }

    return (
        <motion.fieldset layout className={styles.container}>
            <motion.label layout className={ChangeTheme(styles, 'label', theme)}>
                Description <span>*</span>
            </motion.label>
            <motion.textarea 
                layout
                name='description'
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
            <motion.p layout className={ChangeTheme(styles, 'limit', theme)}>
                {char}/280
            </motion.p>
        </motion.fieldset>
    )
}

export default Description;