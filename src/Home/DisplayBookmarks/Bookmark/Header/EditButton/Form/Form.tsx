import React from 'react';
import EnterTitle from './EnterTitle';
import EnterDescription from './EnterDescription';
import EnterURL from './EnterURL'
import EnterTags from './EnterTags';
import {motion} from 'framer-motion';
import {ChangeTheme} from '../../../../../../Common/functions';
import { useTypedSelector } from '../../../../../../Store';
import * as styles from './styles.module.css';

function Form() {
    const theme = useTypedSelector<string>(state => state.theme.theme);

    return(
        <motion.form className={styles.form} layout>
            <EnterTitle/>
            <EnterDescription/>
            <EnterURL/>
            <EnterTags/>
            <motion.fieldset layout className={styles.buttons}>
                <button className={ChangeTheme(styles, 'cancel', theme)}>
                    Cancel
                </button>
                <button className={styles.save}>
                    Save Bookmark
                </button>
            </motion.fieldset>
        </motion.form>
    )
}

export default Form;