import React from 'react';
import {ChangeTheme} from '../../../../Common/functions';
import { useTypedSelector } from '../../../../Store';
import EnterTitle from './EnterTitle';
import EnterDescription from './EnterDescription';
import EnterURL from './EnterURL';
import EnterTags from './EnterTags';
import * as styles from './styles.module.css';

function Form () {
    const theme = useTypedSelector<string>(state => state.theme.theme);

    return(
        <form className={styles.form} >
            <EnterTitle/>
            <EnterDescription/>
            <EnterURL/>
            <EnterTags/>
            <fieldset className={styles.buttons}>
                <button className={ChangeTheme(styles, 'cancel', theme)}>
                    Cancel
                </button>
                <button className={styles.save}>
                    Save Bookmark
                </button>
            </fieldset>
        </form>
    )
}

export default Form;