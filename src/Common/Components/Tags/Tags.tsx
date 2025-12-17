import React, {useEffect, useState} from 'react';
import { useTypedSelector } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import Tag from './Tag'
import * as styles from './styles.module.css';


function Tags() {
    const theme = useTypedSelector(state  => state.theme.theme);
    const [tags, setTags] = useState<Array<[string, number]>>([])

    const handleTags = async () => {
        try{
            const response = await fetch('http://localhost:4000/get_tags', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            if(response.status === 200){
                const result = await response.json();
                console.log(result);
                setTags(result);
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

    useEffect(() => {
        handleTags();
    }, [])

    return (
        <section className={ChangeTheme(styles, 'tags', theme)}>
            <h2 className={ChangeTheme(styles, 'tags_title', theme)}>
                TAGS
            </h2>
            {
                tags.map((tag) => {
                    const name = tag[0];
                    const count = tag[1];

                    return(
                        <div className={styles.tags_tag}>
                            <Tag name={name} count={count}/>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Tags;