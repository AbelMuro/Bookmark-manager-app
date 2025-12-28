import React, {useState} from 'react';
import { useTypedSelector, useTypedDispatch} from '~/Store';
import Dialog from '~/Common/Components/Dialog';
import { useNavigate } from 'react-router-dom';
import {ChangeTheme} from '~/Common/functions';
import * as styles from './styles.module.css';

function LogoutButton() {
    const [open, setOpen] = useState<boolean>(false);
    const theme = useTypedSelector(state => state.theme.theme);
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();

    const handleOpen = () => {
        setOpen(!open);
    }

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
            dispatch({type: 'SHOW_POPUP', payload: message});
        }
    }

    return(      
        <>
            <button className={ChangeTheme(styles, 'account_logout', theme)} onClick={handleOpen}>
                <img className={ChangeTheme(styles, 'account_logout_icon', theme)}/>
                Logout
            </button>        
            <Dialog
                open={open}
                handleOpen={handleOpen}
                handleSubmit={handleLogout}
                submitButtonColor='#014745'
                title={'Are you sure you want to log out?'}
                desc={''}
                submit={'Logout'}
            />
        </>

        )
}

export default LogoutButton;