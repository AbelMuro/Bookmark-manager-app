import React, {useState, ChangeEvent} from 'react';
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
        <fieldset className={styles.container}>
            <label className={styles.label}>
                Password
            </label>
            <input 
                type='password' 
                //pattern={'.{8,}'}
                className={styles.password}
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                required
                />
            {error === 'empty' && 
                <div className={styles.errorMessage}>
                    Can't be empty.
                </div>
            }
            {error === 'length' && 
                <div className={styles.errorMessage}>
                    Must be at least 8 characters long.
                </div>
            }
        </fieldset>
    )
}

export default EnterPassword;