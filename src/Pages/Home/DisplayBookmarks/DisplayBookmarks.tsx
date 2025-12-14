import React, {useEffect, useState, createContext} from 'react';
import SortButton from './SortButton';
import { useTypedSelector, useTypedDispatch } from '~/Store';
import {ChangeTheme} from '~/Common/functions';
import Bookmark from './Bookmark';
import * as styles from './styles.module.css';

type Context = {
    title: string,
    description: string,
    accountId: number,
    bookmarkId: string,
    tags: string,
    url: string,
    createdAt: string,
    views: number,
    lastUpdated: string,
}

export const BookmarkContext = createContext<Context | undefined>(undefined);

function DisplayBookmarks() {
    const theme = useTypedSelector(state  => state.theme.theme);
    const dispatch = useTypedDispatch();
    const [bookmarks, setBookmarks] = useState([]);
    
    const getAllBookmarks = async () => {
        try{
            const response = await fetch('http://localhost:4000/get_bookmarks', {
                method: 'GET',
                credentials: 'include',
            });

            if(response.status === 200){
                const result = await response.json();
                setBookmarks(result);
            }
            else{
                const result = await response.text();
                console.log(result);
                dispatch({type: 'SHOW_POPUP', payload: result});
            }

        }
        catch(error){
            const message = error.message;
            console.log(message);
            dispatch({type: 'SHOW_POPUP', payload: message})
        }
    }

    useEffect(() => {
        getAllBookmarks();
        document.addEventListener('update_bookmarks', getAllBookmarks);

        return () => {
            document.removeEventListener('update_bookmarks', getAllBookmarks)
        }
    }, [])

    return(
        <section className={styles.container}>
            <h1 className={ChangeTheme(styles, 'title', theme)}>
                All bookmarks
            </h1>
            <SortButton/>
            {
                bookmarks.map((bookmark) => {
                    const title = bookmark.title;
                    const description = bookmark.description;
                    const bookmarkId = bookmark.id;
                    const accountId = bookmark.account_id;
                    const tags = bookmark.tags;
                    const url = bookmark.url;
                    const createdAt = bookmark.created_at;
                    const views = bookmark.views;
                    const lastUpdated = bookmark.last_updated;
                    const archived = bookmark.archived;

                    if(!archived)
                        return(
                            <BookmarkContext.Provider value={{
                                    title, 
                                    description, 
                                    accountId, 
                                    bookmarkId, 
                                    tags, 
                                    url,
                                    createdAt,
                                    views,
                                    lastUpdated,
                                    }}>
                                <Bookmark key={`${bookmarkId} ${archived}`}/> 
                            </BookmarkContext.Provider>
                        )
                    else
                        return null;
                })
            }
        </section>
    )
}

export default DisplayBookmarks;