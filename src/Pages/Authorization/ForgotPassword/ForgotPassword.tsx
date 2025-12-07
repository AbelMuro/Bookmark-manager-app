import React from 'react';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import Form from './Form';
import {LayoutGroup, motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import * as styles from './styles.module.css';

function ForgotPassword(){
   const navigate = useNavigate();
   const theme = useTypedSelector(state  => state.theme.theme);

    const handleNavigation = () => {
        navigate('/');
    }

    return(
        <section className={styles.container}>
            <LayoutGroup>
                <motion.article layout className={ChangeTheme(styles, 'forgot', theme)}>
                    <motion.img layout className={ChangeTheme(styles, 'forgot_logo', theme)} key='logo'/>
                    <motion.div layout className={ChangeTheme(styles, 'forgot_header', theme)}>
                        <h1 className={ChangeTheme(styles, 'forgot_title', theme)}>
                            Forgot your password?
                        </h1>
                        <p className={ChangeTheme(styles, 'forgot_desc', theme)}>
                            Enter your email address below and we’ll send you a link to reset your password.
                        </p>                
                    </motion.div>
                    <Form/>
                    <button className={ChangeTheme(styles, 'back', theme)} type='button' onClick={handleNavigation}>
                        Back to login
                    </button>
                </motion.article>   
            </LayoutGroup>
        </section>
    )
}

export default ForgotPassword;