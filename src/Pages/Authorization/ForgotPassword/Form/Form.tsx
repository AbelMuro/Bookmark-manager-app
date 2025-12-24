import React, {FormEvent, useState} from 'react';
import {ChangeTheme} from '~/Common/functions';
import {useTypedDispatch, useTypedSelector} from '~/Store';
import {ClipLoader} from 'react-spinners';
import EnterEmail from './EnterEmail';
import * as styles from './styles.module.css';

function Form() {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useTypedDispatch()
    const theme = useTypedSelector(state  => state.theme.theme);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const email = e.currentTarget.elements.namedItem('email') as HTMLInputElement;

        try{
            const response = await fetch('https://bookmark-manager-server.netlify.app/create_token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email.value})
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                dispatch({type: 'SHOW_POPUP', payload: 'Reset link has been sent to your email'});
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
            <EnterEmail/>
            <button className={ChangeTheme(styles, 'submit', theme)}>
                {loading ? <ClipLoader size='25px' color='white'/> : 'Send reset link'}
            </button>
        </form>
    )
}

export default Form;