import React, {forwardRef} from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeButton from './ThemeButton';
import { useTypedSelector, useTypedDispatch } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import {motion} from 'framer-motion';
import icons from '../icons';
import * as styles from './styles.module.css';


const DisplayAccount = forwardRef((_, ref : React.Ref<HTMLElement | null>) => {
    const theme = useTypedSelector(state  => state.theme.theme);
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            const response = await fetch('https://bookmark-manager-server.netlify.app/logout', {
                method: 'DELETE',
                credentials: 'include',
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                dispatch({type: 'SHOW_POPUP', payload: 'You have successfully logged out'});
                navigate('/');
            }
            else{
                const result = await response.text();
                console.log(result);
            }

        }
        catch(error){
            const message = error.message;
            console.log(message);
        }
    }

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
                <button className={ChangeTheme(styles, 'account_logout', theme)} onClick={handleLogout}>
                    <img className={ChangeTheme(styles, 'account_logout_icon', theme)}/>
                    Logout
                </button>
        </motion.article>
    )
})

export default DisplayAccount;