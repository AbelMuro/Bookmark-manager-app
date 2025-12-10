import React, {FormEvent, useState} from 'react';
import {ClipLoader} from 'react-spinners'
import {motion} from 'framer-motion';
import {ChangeTheme} from '~/Common/functions';
import { useTypedSelector, useTypedDispatch } from '~/Store';
import EnterTitle from './EnterTitle';
import EnterDescription from './EnterDescription';
import EnterURL from './EnterURL';
import EnterTags from './EnterTags';
import * as styles from './styles.module.css';

type Props = {
    setOpen: Function
}

function Form ({setOpen} : Props) {
    const theme = useTypedSelector(state  => state.theme.theme);
    const dispatch = useTypedDispatch();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const title = e.currentTarget.elements.namedItem('title') as HTMLInputElement;
        const desc = e.currentTarget.elements.namedItem('description') as HTMLInputElement;
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
                setLoading(false);
                setOpen(false);
                dispatch({type: 'SHOW_POPUP', payload: result});
            }
            else{
                const result = await response.text();
                setLoading(false);
                console.log(result);
                dispatch({type: 'SHOW_POPUP', payload: result});
            }
        }
        catch(error){
            const message = error.message;
            console.log(message);
            setLoading(false);
            dispatch({type: 'SHOW_POPUP', payload: message});
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
                    {loading ? <ClipLoader size='25px' color='white'/> : 'Save Bookmark'}
                </button>
            </motion.fieldset>
        </motion.form>
    )
}

export default Form;