import React from 'react';
import Form from './Form';
import {LayoutGroup, motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import * as styles from './styles.module.css';

function ForgotPassword(){
   const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
    }

    return(
        <section className={styles.container}>
            <LayoutGroup>
                <motion.article layout className={styles.forgot}>
                    <motion.img layout className={styles.forgot_logo} key='logo'/>
                    <motion.div layout className={styles.forgot_header}>
                        <h1 className={styles.forgot_title}>
                            Forgot your password?
                        </h1>
                        <p className={styles.forgot_desc}>
                            Enter your email address below and we’ll send you a link to reset your password.
                        </p>                
                    </motion.div>
                    <Form/>
                    <button className={styles.back} type='button' onClick={handleNavigation}>
                        Back to login
                    </button>
                </motion.article>   
            </LayoutGroup>
        </section>
    )
}

export default ForgotPassword;