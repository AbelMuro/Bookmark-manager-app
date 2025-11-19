import React from 'react';
import {useNavigate} from 'react-router-dom'
import Form from './Form';
import {LayoutGroup, motion} from 'framer-motion';
import * as styles from './styles.module.css';

function ResetPassword(){
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
    }

    return(
        <section className={styles.container}>
            <LayoutGroup>
                <motion.article layout className={styles.reset}>
                    <motion.img layout className={styles.reset_logo} key='logo'/>
                    <motion.div layout className={styles.reset_header}>
                        <h1 className={styles.reset_title}>
                            Reset Your Password
                        </h1>
                        <p className={styles.reset_desc}>
                            Enter your new password below. Make sure it’s strong and secure.
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

export default ResetPassword;