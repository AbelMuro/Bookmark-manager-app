import React from 'react';
import {ChangeTheme} from '~/Common/functions';
import AddBookmark from '~/Common/Components/AddBookmark';
import Account from '~/Common/Components/Account';
import MobileNavButton from './MobileNavButton';
import { useTypedSelector } from '~/Store';
import Search from '~/Common/Components/Search';
import * as styles from './styles.module.css';

function MobileHeaderBar() {
    const theme = useTypedSelector(state => state.theme.theme);

    return(
        <header className={ChangeTheme(styles, 'header', theme)}>
            <section className={styles.header_group}>
                <MobileNavButton/>
                <Search/>
            </section>
            <section className={styles.header_group}>
                <AddBookmark/>
                <Account/>
            </section>
        </header>
    )
}

export default MobileHeaderBar;