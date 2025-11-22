import React, {FormEvent} from 'react';
import EnterEmail from './EnterEmail';
import * as styles from './styles.module.css';

function Form() {

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const email = e.currentTarget.namedItem('email') as HTMLInputElement;


        try{
            const response = await fetch('http://localhost:4000/', {
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
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <EnterEmail/>
            <button className={styles.submit}>
                Send reset link
            </button>
        </form>
    )
}

export default Form;