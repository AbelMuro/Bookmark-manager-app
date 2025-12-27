import React from 'react';
import { ChangeTheme } from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import {useNavigate, useParams} from 'react-router-dom'
import Form from './Form';
import {LayoutGroup, motion} from 'framer-motion';
import * as styles from './styles.module.css';

function ResetPassword(){
    const theme = useTypedSelector(state  => state.theme.theme);

    const navigate = useNavigate();
    const {token} = useParams();
    if(!token) return null;

    const handleNavigation = () => {
        navigate('/');
    }

    return(
        <section className={styles.container}>
            <LayoutGroup>
                <motion.article layout className={ChangeTheme(styles, 'reset', theme)}>
                    <motion.img layout className={ChangeTheme(styles, 'reset_logo', theme)} key='logo'/>
                    <motion.div layout className={styles.reset_header}>
                        <h1 className={ChangeTheme(styles, 'reset_title', theme)}>
                            Reset Your Password
                        </h1>
                        <p className={ChangeTheme(styles, 'reset_desc', theme)}>
                            Enter your new password below. Make sure it’s strong and secure.
                        </p>                
                    </motion.div>
                    <Form token={token}/>
                    <button className={ChangeTheme(styles, 'back', theme)} type='button' onClick={handleNavigation}>
                        Back to login
                    </button>
                </motion.article>   
            </LayoutGroup>
        </section>
    )
}

export default ResetPassword;