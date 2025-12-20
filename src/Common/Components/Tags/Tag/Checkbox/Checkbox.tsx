import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTypedDispatch } from '~/Store';
import { ChangeTheme } from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import icons from './icons';
import * as styles from './styles.module.css';

type Props = {
    name: string
}

function Checkbox({name} : Props) {
    const [check, setCheck] = useState<boolean>(false);
    const theme = useTypedSelector(state => state.theme.theme);
    const tags = useTypedSelector(state => state.tags.tags);
    const dispatch = useTypedDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const handleCheck = () => {
        setCheck(!check);
        navigate(`/home/tags`);
    }

    useEffect(() => {
        if(check)
            dispatch({type: 'ADD_TAG', payload: name})
        else
            dispatch({type: 'REMOVE_TAG', payload: name});
    }, [check])

    useEffect(() => {
        if(!pathname.includes('tags'))
            setCheck(false);
    }, [pathname])

    useEffect(() => {
        const result = tags.some((tag) => tag === name);
        setCheck(result);
    }, [tags])

    return(
        <div className={styles.container}>
            {check && <img className={styles.checkmark} src={icons['checkmark']}/>}
            <input type='check' className={ChangeTheme(styles, 'checkbox', theme)} checked={check} onClick={handleCheck}/>            
        </div>
    )
}

export default Checkbox;