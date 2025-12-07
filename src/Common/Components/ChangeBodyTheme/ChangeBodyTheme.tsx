import React, {useEffect} from 'react';
import { useTypedSelector } from '~/Store';


function ChangeBodyTheme() {
    const theme  = useTypedSelector(state  => state.theme.theme);

    useEffect(() => {
        const body = document.body;

        body.style.backgroundColor = theme === 'light' ? '#DDE9E7' : '#001414';
    }, [theme])

    return <></>;
}

export default ChangeBodyTheme;