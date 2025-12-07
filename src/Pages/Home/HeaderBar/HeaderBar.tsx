import React from 'react';
import Search from '~/Common/Components/Search';
import Account from './Account';
import AddBookmark from './AddBookmark';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import * as styles from './styles.module.css';

function HeaderBar() {
    const theme = useTypedSelector(state  => state.theme.theme);

    return(
        <header className={ChangeTheme(styles, 'header', theme)}>
            <Search/>
            <div className={styles.group}>
                <AddBookmark/>
                <Account/>
            </div>
        </header>
    )
}

export default HeaderBar;