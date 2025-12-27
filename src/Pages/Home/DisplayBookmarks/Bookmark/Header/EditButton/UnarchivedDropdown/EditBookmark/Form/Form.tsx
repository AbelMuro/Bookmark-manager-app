import React, {useState, useContext, FormEvent} from 'react';
import { ClipLoader } from 'react-spinners';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import EnterTitle from './EnterTitle';
import EnterDescription from './EnterDescription';
import EnterURL from './EnterURL'
import EnterTags from './EnterTags';
import {motion} from 'framer-motion';
import {ChangeTheme, FormatDate} from '~/Common/functions';
import { useTypedSelector, useTypedDispatch } from '~/Store';
import * as styles from './styles.module.css';

type Props = {
    setOpen: Function
}

function Form({setOpen} : Props) {
    const [loading, setLoading] = useState(false);
    const theme = useTypedSelector(state  => state.theme.theme);
    const dispatch = useTypedDispatch();
    const {bookmarkId} = useContext(BookmarkContext);

    const handleCancel = () => {
        setOpen(false);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const title = e.currentTarget.elements.namedItem('title') as HTMLInputElement;
        const description = e.currentTarget.elements.namedItem('description') as HTMLInputElement;
        const url = e.currentTarget.elements.namedItem('url') as HTMLInputElement;
        const tags = e.currentTarget.elements.namedItem('tags') as HTMLInputElement;
        const date = new Date();
        const day = date.getDate();
        const month = date.getMonth();
        const dateUpdated = FormatDate(day, month);

        try{    
            const response = await fetch('https://bookmark-manager-server.netlify.app/edit_bookmark', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title.value,
                    description: description.value,
                    url: url.value,
                    tags: tags.value,
                    bookmarkId,
                    dateUpdated
                })
            });

            if(response.status === 200){
                const result = await response.text();
                console.log(result);
                setOpen(false);
                dispatch({type: 'SHOW_POPUP', payload: result})
                const event = new CustomEvent('update_bookmarks');
                document.dispatchEvent(event);
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
        finally{
            setLoading(false);
        }
    }

    return(
        <motion.form className={styles.form} layout onSubmit={handleSubmit}>
            <EnterTitle/>
            <EnterDescription/>
            <EnterURL/>
            <EnterTags/>
            <motion.fieldset layout className={styles.buttons}>
                <button type='button' onClick={handleCancel} className={ChangeTheme(styles, 'cancel', theme)}>
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