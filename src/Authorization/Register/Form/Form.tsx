import React, {FormEvent} from 'react';
import EnterName from './EnterName';
import EnterEmail from './EnterEmail';
import EnterPassword from './EnterPassword';
import * as styles from './styles.module.css';

function Form() {

    const handleSubmit = async (e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        const email = e.currentTarget.elements.namedItem('email') as HTMLInputElement;
        const name = e.currentTarget.elements.namedItem('name') as HTMLInputElement;
        const password = e.currentTarget.elements.namedItem('password') as HTMLInputElement;
        console.log(email.value, name.value, password.value);

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
            }
            else{
                const result = await response.text();
                console.log(result)
            }            
        }
        catch(error){
            const message = error.message;
            console.error('/create_account', message)
        }
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <EnterName/>
            <EnterEmail/>
            <EnterPassword/>
            <button className={styles.submit}>
                Create account
            </button>
        </form>
    )
}

export default Form;