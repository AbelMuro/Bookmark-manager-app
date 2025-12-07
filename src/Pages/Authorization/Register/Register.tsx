import React from 'react';
import { ChangeTheme } from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import {useNavigate} from 'react-router-dom'
import Form from './Form'
import { LayoutGroup, motion } from 'framer-motion';
import * as styles from './styles.module.css';

function Register() {
    const navigate = useNavigate();
    const theme = useTypedSelector(state  => state.theme.theme);

    const handleNavigation = () => {
        navigate('/');
    }

    return(
        <section className={styles.container}>
            <LayoutGroup>
                <motion.article layout className={ChangeTheme(styles, 'register', theme)}>
                    <motion.img layout className={ChangeTheme(styles, 'register_logo', theme)} key='logo'/>
                    <motion.div layout className={styles.register_header}>
                        <h1 className={ChangeTheme(styles, 'register_title', theme)}>
                           Create your account
                        </h1>
                        <p className={ChangeTheme(styles, 'register_desc', theme)}>
                            Join us and start saving your favorite links — organized, searchable, and always within reach.
                        </p>                
                    </motion.div>
                    <Form/>
                    <motion.div layout className={styles.register_footer}>
                        <p className={ChangeTheme(styles, 'register_forgot', theme)}>
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