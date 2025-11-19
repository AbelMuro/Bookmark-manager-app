import React from 'react';
import Form from './Form';
import {LayoutGroup, motion} from 'framer-motion';
import * as styles from './styles.module.css';

function ResetPassword(){

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
                </motion.article>   
            </LayoutGroup>
        </section>
    )
}

export default ResetPassword;