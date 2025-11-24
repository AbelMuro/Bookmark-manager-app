import React, {FormEvent, useState} from 'react';
import {ClipLoader} from 'react-spinners';
import EnterEmail from './EnterEmail';
import * as styles from './styles.module.css';

function Form() {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const email = e.currentTarget.elements.namedItem('email') as HTMLInputElement;

        try{
            const response = await fetch('http://localhost:4000/create_token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: email.value})
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
            }
            else{
                const result = await response.text();
                console.log(result);
            }
        }
        catch(error){
            const message = error.message;
            console.log(message);
        }
        finally{
            setLoading(false);
        }
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <EnterEmail/>
            <button className={styles.submit}>
                {loading ? <ClipLoader size='25px' color='white'/> : 'Send reset link'}
            </button>
        </form>
    )
}

export default Form;