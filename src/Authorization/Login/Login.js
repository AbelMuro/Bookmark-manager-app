import React from 'react';
import {useNavigate} from 'react-router-dom'
import {motion, LayoutGroup} from 'framer-motion';
import Form from './Form';
import * as styles from  './styles.module.css';

function Login() {
    const navigate = useNavigate();

    const handleNavigation = (link) => {
        navigate(link);
    }

    return(
        <section className={styles.container}>
            <LayoutGroup>
                <motion.article layout className={styles.login}>
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
                            <button type='button' onClick={() => handleNavigation('/reset')}>
                                Reset it
                            </button>
                        </p>
                        <p className={styles.login_sign}>
                            Don't have an account? 
                            <button type='button' onClick={() => handleNavigation('/register')}>
                                Sign up
                            </button>
                        </p>
                    </motion.div>
                </motion.article>   
            </LayoutGroup>
        </section>
    )
}

export default Login;