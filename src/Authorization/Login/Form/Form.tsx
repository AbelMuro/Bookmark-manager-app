import React, {FormEvent} from 'react';
import {motion} from 'framer-motion';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

function Form () {

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
                console.log(result)
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

    return (
        <motion.form layout className={styles.form} onSubmit={handleSubmit}>
            <EnterEmail/>
            <EnterPassword/>
            <motion.button layout className={styles.submit}>
                Log in
            </motion.button>
        </motion.form>
    )
}

export default Form;