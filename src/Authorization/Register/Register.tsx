import React from 'react';
import {useNavigate} from 'react-router-dom'
import Form from './Form'
import { LayoutGroup, motion } from 'framer-motion';
import * as styles from './styles.module.css';

function Register() {
    const navigate = useNavigate();


    const handleNavigation = () => {
        navigate('/');
    }

    return(
        <section className={styles.container}>
            <LayoutGroup>
                <motion.article layout className={styles.register}>
                    <motion.img layout className={styles.register_logo} key='logo'/>
                    <motion.div layout className={styles.register_header}>
                        <h1 className={styles.register_title}>
                           Create your account
                        </h1>
                        <p className={styles.register_desc}>
                            Join us and start saving your favorite links — organized, searchable, and always within reach.
                        </p>                
                    </motion.div>
                    <Form/>
                    <motion.div layout className={styles.register_footer}>
                        <p className={styles.register_forgot}>
                            Already have an account?
                            <button type='button' onClick={handleNavigation}>
                                Log in
                            </button>
                        </p>
                    </motion.div>
                </motion.article>   
            </LayoutGroup>
        </section>
    );
}

export default Register;