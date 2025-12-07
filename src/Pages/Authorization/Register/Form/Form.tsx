import React, {FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useTypedDispatch } from '~/Store';
import {ClipLoader} from 'react-spinners';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

function Form() {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        setLoading(true);
        const email = e.currentTarget.elements.namedItem('email') as HTMLInputElement;
        const name = e.currentTarget.elements.namedItem('name') as HTMLInputElement;
        const password = e.currentTarget.elements.namedItem('password') as HTMLInputElement;

        try{
            const response = await fetch('http://localhost:4000/create_account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email.value, 
                    name: name.value, 
                    password: password.value
                })
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                dispatch({type: 'SHOW_POPUP', payload: 'Account has been successfully created'});
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
            console.error('/create_account', message)
            dispatch({type: 'SHOW_POPUP', payload: message});
        }
        finally{
            setLoading(false);
        }
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <EnterName/>
            <EnterEmail/>
            <EnterPassword/>
            <button className={styles.submit}>
                {loading ? <ClipLoader size='25px' color='white'/> : 'Create account'}
            </button>
        </form>
    )
}

export default Form;