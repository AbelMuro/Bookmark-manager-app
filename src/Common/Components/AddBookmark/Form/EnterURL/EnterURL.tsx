import React, {useState, ChangeEvent} from 'react';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function EnterURL() {
    const [url, setUrl] = useState<string>('');
    const [error, setError] = useState<string>('');
    const theme = useTypedSelector(state  => state.theme.theme);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        e.target.setCustomValidity('');
        setError('');
        setUrl(input);
    }

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const isEmpty = e.target.validity.valueMissing;
        
        try{
            new URL(url);
            if(isEmpty)
                setError('empty');
        }
        catch(error){
            const message = error.message;
            console.log(message);
            setError('invalid')
        }

        
    }

    const handleInvalid = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.setCustomValidity(' ');
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty');
    }

    return (
        <motion.fieldset layout className={styles.container}>
            <motion.label layout className={ChangeTheme(styles, 'label', theme)}>
                Website URL <span>*</span>
            </motion.label>
            <motion.input
                layout
                name='url'
                type='url'
                style={error ? {borderColor: '#CB0A04'} : {}}
                value={url}                
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
            {
                error === 'invalid' && 
                    <motion.div 
                        layout
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        className={styles.errorMessage}>
                        Please enter a valid URL.
                    </motion.div>
            }
        </motion.fieldset>
    )
}

export default EnterURL;