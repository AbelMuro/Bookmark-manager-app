import React, {useState, ChangeEvent} from 'react';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

function Form() {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            setError(true);
            return;
        }
            
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <EnterPassword label={'New Password'} password={password} setPassword={setPassword}/>
            <EnterPassword label={'Confirm Password'} password={confirmPassword} setPassword={setConfirmPassword}/>
            {error && 
                <div className={styles.errorMessage}>
                    Passwords don't match
                </div>
            }
            <button className={styles.submit}>
                Reset password
            </button>
        </form>
    )
}

export default Form;