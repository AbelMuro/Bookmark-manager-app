import React from 'react';
import { ChangeTheme } from '../../Common/functions';
import { useTypedSelector } from '../../Store';
import {useNavigate} from 'react-router-dom'
import {motion, LayoutGroup} from 'framer-motion';
import Form from './Form';
import * as styles from  './styles.module.css';

function Login() {
    const navigate = useNavigate();
    const theme = useTypedSelector<string>(state => state.theme.theme);

    const handleNavigation = (link : string) => {
        navigate(link);
    }

    return(
        <section className={styles.container}>
            <LayoutGroup>
                <motion.article layout className={ChangeTheme(styles, 'login', theme)}>
                    <motion.img layout className={ChangeTheme(styles, 'login_logo', theme)} key='logo'/>
                    <motion.div layout className={ChangeTheme(styles, 'login_header', theme)}>
                        <h1 className={ChangeTheme(styles, 'login_title', theme)}>
                            Log in to your account
                        </h1>
                        <p className={ChangeTheme(styles, 'login_desc', theme)}>
                            Welcome back! Please enter your details.
                        </p>                
                    </motion.div>
                    <Form/>
                    <motion.div layout className={styles.login_footer}>
                        <p className={ChangeTheme(styles, 'login_forgot', theme)}>
                            Forgot password?
                            <button type='button' onClick={() => handleNavigation('/forgot')}>
                                Reset it
                            </button>
                        </p>
                        <p className={ChangeTheme(styles, 'login_sign', theme)}>
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