import React from 'react';
import { useTypedSelector } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import Header from './Header';
import Tags from './Tags';
import Misc from './Misc';
import * as styles from './styles.module.css';

function Bookmark() {
    const theme = useTypedSelector(state  => state.theme.theme);

    return(
        <article className={ChangeTheme(styles, 'bookmark', theme)}>
            <section>
                <Header/>
                <hr className={ChangeTheme(styles, 'bookmark_line', theme)}/>
                <p className={ChangeTheme(styles, 'bookmark_desc', theme)}>
                    Improve your front-end coding skills by building real projects. 
                    Solve real-world HTML, CSS and JavaScript challenges whilst 
                    working to professional designs.
                </p>
                <Tags/>                
            </section>
            <Misc/>
        </article>
    )
}

export default Bookmark;