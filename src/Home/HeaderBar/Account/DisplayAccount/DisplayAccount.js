import React from 'react';
import {motion} from 'framer-motion';
import icons from '../icons';
import * as styles from './styles.module.css';

function DisplayAccount() {
    return(
        <motion.article 
            className={styles.account}
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            transition={{type: 'spring'}}
            >
                <div className={styles.account_info}>
                    <img src={icons['placeholder']}/>
                    <h2>
                        Emily Carter
                    </h2>
                    <p>
                        emily101@gmail.com
                    </p>
                </div>
                <hr className={styles.account_line}/>
                <div className={styles.account_theme}>
                    <div className={styles.group}>
                        <img className={styles.account_theme_icon}/>
                        Theme
                    </div>
                </div>
                <hr className={styles.account_line}/>
                <div className={styles.account_logout}>
                    <img className={styles.account_logout_icon}/>
                    Logout
                </div>
        </motion.article>
    )
}

export default DisplayAccount;