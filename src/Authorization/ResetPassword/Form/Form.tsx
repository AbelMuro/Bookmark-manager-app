import React, {useState, FormEvent} from 'react';
import {useNavigate} from 'react-router-dom';
import { useTypedDispatch } from '../../../Store';
import { ClipLoader } from 'react-spinners';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

type Props = {
    token: string
}


function Form({token} : Props) {
    const [loading, setLoading] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(password !== confirmPassword) {
            setError(true);
            return;
        }
        setLoading(true);
        try{
            const response = await fetch('http://localhost:4000/reset_password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({token, password})
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                dispatch({type: 'SHOW_POPUP', payload: result});
                navigate('/')
            }
            else{
                const result = await response.text();
                console.log(result);
                dispatch({type: 'SHOW_POPUP', payload: result});
            }

        }
        catch(error){
            const message = error.message;
            console.log(message);
            dispatch({type: 'SHOW_POPUP', payload: message});
        }
        finally{
            setLoading(false);
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
                {loading ? <ClipLoader size='25px' color='white'/> : 'Reset password'}
            </button>
        </form>
    )
}

export default Form;