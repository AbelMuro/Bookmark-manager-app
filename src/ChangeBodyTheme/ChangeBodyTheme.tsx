import React, {useEffect} from 'react';
import { useTypedSelector } from '../Store';


function ChangeBodyTheme() {
    const theme = useTypedSelector<string>(state => state.theme.theme);

    useEffect(() => {
        const body = document.body;

        body.style.backgroundColor = theme === 'light' ? '#B1B9B9' : '#001414';
    }, [theme])

    return <></>;
}

export default ChangeBodyTheme;