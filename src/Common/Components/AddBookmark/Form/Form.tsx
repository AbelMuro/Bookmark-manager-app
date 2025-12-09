import React, {FormEvent} from 'react';
import {motion} from 'framer-motion';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import EnterTitle from './EnterTitle';
import EnterDescription from './EnterDescription';
import EnterURL from './EnterURL';
import EnterTags from './EnterTags';
import * as styles from './styles.module.css';

function Form () {
    const theme = useTypedSelector(state  => state.theme.theme);

    const handleSubmit = async (e : FormEvent<HTMLFormElement>) => {
        const title = e.currentTarget.elements.namedItem('title') as HTMLInputElement;
        const desc = e.currentTarget.elements.namedItem('desc') as HTMLInputElement;
        const url = e.currentTarget.elements.namedItem('url') as HTMLInputElement;
        const tags = e.currentTarget.elements.namedItem('tags') as HTMLInputElement;

        try{
            const response = await fetch('http://localhost:4000/add_bookmark', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title.value,
                    desc: desc.value,
                    url: url.value,
                    tags: tags.value,
                }),
                credentials: 'include'
            });

            if(response.status === 200){
                const result = await response.text();

                console.log(result);
            }
            else{
                const result = await response.text();
                console.log(result);
            }


        }
        catch(error){
            const message = error.message;
            console.log(message);
        }
    }

    return(
        <motion.form className={styles.form} layout onSubmit={handleSubmit}>
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