import React, {FormEvent, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {TypedDispatch} from '../../../Store';
import {ClipLoader} from 'react-spinners';
import {motion} from 'framer-motion';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

const useTypedDispatch = () => useDispatch<TypedDispatch>();

function Form () {
    const [loading, setLoading] = useState<boolean>(false);
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const email = e.currentTarget.elements.namedItem('email') as HTMLInputElement;
        const password = e.currentTarget.elements.namedItem('password') as HTMLInputElement;

        try{
            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({email: email.value, password: password.value})
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                dispatch({type: 'SHOW_POPUP', payload: 'You have successfully logged in'});
                navigate('/home')
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

    return (
        <motion.form layout className={styles.form} onSubmit={handleSubmit}>
            <EnterEmail/>
            <EnterPassword/>
            <motion.button layout className={styles.submit}>
                {loading ? <ClipLoader size='25px' color='white'/> : 'Log in'}
            </motion.button>
        </motion.form>
    )
}

export default Form;