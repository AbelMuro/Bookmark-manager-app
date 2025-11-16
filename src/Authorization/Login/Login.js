import React from 'react';
import Form from './Form';
import icons from './icons';
import * as styles from  './styles.module.css';

function Login() {
    return(
        <article className={styles.login}>
            <img className={styles.login_logo} src={icons['lightTheme']}/>
            <div className={styles.login_header}>
                <h1 className={styles.login_title}>
                    Log in to your account
                </h1>
                <p className={styles.login_desc}>
                    Welcome back! Please enter your details.
                </p>                
            </div>
            <Form/>
        </article>
    )
}

export default Login;