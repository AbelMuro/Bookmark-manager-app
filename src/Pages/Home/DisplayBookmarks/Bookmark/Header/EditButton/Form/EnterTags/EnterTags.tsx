import React, {useState, ChangeEvent, useContext} from 'react';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import { ChangeTheme } from '~/Common/functions';
import { useTypedSelector } from '~/Store';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function EnterTags() {
    const {tags : prevTags} = useContext(BookmarkContext);
    const [tags, setTags] = useState<string>(prevTags);
    const [error, setError] = useState<string>('');
    const theme = useTypedSelector(state  => state.theme.theme);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        e.target.setCustomValidity('');
        setError('');
        setTags(input);
    }

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const isEmpty = e.target.validity.valueMissing;
        
        if(isEmpty)
            setError('empty');
    }

    const handleInvalid = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.setCustomValidity(' ');
        const isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            setError('empty');
    }

    return (
        <motion.fieldset layout className={styles.container}>
            <motion.label layout className={ChangeTheme(styles, 'label', theme)}>
                Tags <span>*</span>
            </motion.label>
            <motion.input
                layout
                name='tags'
                type='text'
                placeholder='e.g Design, Learning, Tools'
                style={error ? {borderColor: '#CB0A04'} : {}}
                value={tags}                
                onChange={handleChange}
                onBlur={handleBlur}
                onInvalid={handleInvalid}
                className={ChangeTheme(styles, 'input', theme)} 
                required/>
            {
                error === 'empty' && 
                    <motion.div 
                        layout
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        className={styles.errorMessage}>
                        Can't be empty.
                    </motion.div>
            }
        </motion.fieldset>
    )
}

export default EnterTags;