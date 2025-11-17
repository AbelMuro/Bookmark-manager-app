import React, {useState, ChangeEvent} from 'react';
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
            setError('invalid');
        
    }

    const handleInvalid = (e: ChangeEvent<HTMLInputElement>) => {
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty')
        else 
            setError('invalid')
    }

    return (
        <fieldset className={styles.container}>
            <label className={styles.label}>
                Email
            </label>
            <input 
                type='email' 
                value={email}                
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                className={styles.input} 
                required/>
            {
                error === 'empty' && 
                    <div className={styles.errorMessage}>
                        Can't be empty.
                    </div>
            }
            {
                error === 'invalid' &&
                    <div className={styles.errorMessage}>
                        Enter a valid email address.
                    </div>
            }
        </fieldset>
    )
}

export default EnterEmail;