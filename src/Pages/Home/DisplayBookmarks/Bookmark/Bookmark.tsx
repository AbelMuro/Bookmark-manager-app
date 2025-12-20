import React, {useContext} from 'react';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import { useTypedSelector } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import Header from './Header';
import Tags from './Tags';
import Footer from './Footer';
import * as styles from './styles.module.css';


function Bookmark() {
    const theme = useTypedSelector(state  => state.theme.theme);
    const {description} = useContext(BookmarkContext);

    return(
        <article className={ChangeTheme(styles, 'bookmark', theme)}>
            <section>
                <Header/>
                <hr className={ChangeTheme(styles, 'bookmark_line', theme)}/>
                <p className={ChangeTheme(styles, 'bookmark_desc', theme)}>
                    {description}
                </p>
                <Tags/>                
            </section>
            <Footer/>
        </article>
    )
}

export default Bookmark;