import React from 'react';
import {motion} from 'framer-motion';
import Form from './Form';
import * as styles from  './styles.module.css';

function Login() {
    return(
        <section className={styles.container}>
            <motion.article className={styles.login} layout>
                <motion.img layout className={styles.login_logo} key='logo'/>
                <motion.div layout className={styles.login_header}>
                    <h1 className={styles.login_title}>
                        Log in to your account
                    </h1>
                    <p className={styles.login_desc}>
                        Welcome back! Please enter your details.
                    </p>                
                </motion.div>
                <Form/>
                <motion.div layout className={styles.login_footer}>
                    <p className={styles.login_forgot}>
                        Forgot password?
                        <button type='button'>
                            Reset it
                        </button>
                    </p>
                    <p className={styles.login_sign}>
                        Don't have an account? 
                        <button type='button'>
                            Sign up
                        </button>
                    </p>
                </motion.div>
            </motion.article>            
        </section>

    )
}

export default Login;