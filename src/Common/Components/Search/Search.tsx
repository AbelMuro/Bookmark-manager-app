import React, {memo, ChangeEvent, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector, useTypedDispatch } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import * as styles from './styles.module.css';

function Search() {
    const theme = useTypedSelector(state  => state.theme.theme);
    const search = useTypedSelector(state => state.search.search);
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'UPDATE_SEARCH', payload: e.target.value})
    }

    useEffect(() => {
        if(!search.length) return;
        navigate('/home/search')
    }, [search])

    return(
        <form className={styles.container}>
            <img className={ChangeTheme(styles, 'search_icon', theme)}/>
            <input 
                type='text' 
                value={search}
                onChange={handleChange}
                className={ChangeTheme(styles, 'search', theme)}
                placeholder={'Search by title...'}
                />
        </form>
    )
}

export default memo(Search);