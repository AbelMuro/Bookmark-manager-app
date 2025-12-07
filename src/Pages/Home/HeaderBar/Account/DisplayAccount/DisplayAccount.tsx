import React, {forwardRef} from 'react';
import ThemeButton from './ThemeButton';
import { useTypedSelector } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import {motion} from 'framer-motion';
import icons from '../icons';
import * as styles from './styles.module.css';


const DisplayAccount = forwardRef((_, ref : React.Ref<HTMLElement | null>) => {
    const theme = useTypedSelector(state  => state.theme.theme);

    return(
        <motion.article 
            ref={ref}
            className={ChangeTheme(styles, 'account', theme)}
            initial={{scale: 0}}
            animate={{scale: 1}}
            exit={{scale: 0}}
            transition={{type: 'spring'}}
            >
                <div className={ChangeTheme(styles, 'account_info', theme)}>
                    <img src={icons['placeholder']}/>
                    <h2>
                        Emily Carter
                    </h2>
                    <p>
                        emily101@gmail.com
                    </p>
                </div>
                <hr className={ChangeTheme(styles, 'account_line', theme)}/>
                <div className={ChangeTheme(styles, 'account_theme', theme)}>
                    <div className={styles.group}>
                        <img className={ChangeTheme(styles, 'account_theme_icon', theme)}/>
                        Theme
                    </div>
                    <ThemeButton/>
                </div>
                <hr className={ChangeTheme(styles, 'account_line', theme)}/>
                <button className={ChangeTheme(styles, 'account_logout', theme)}>
                    <img className={ChangeTheme(styles, 'account_logout_icon', theme)}/>
                    Logout
                </button>
        </motion.article>
    )
})

export default DisplayAccount;