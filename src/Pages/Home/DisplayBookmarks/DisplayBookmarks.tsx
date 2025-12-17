import React, {useEffect, useState, createContext, useRef} from 'react';
import LoadingBookmarks from '~/Common/Components/LoadingBookmarks';
import SortButton from '~/Common/Components/SortButton';
import Bookmark from '~/Common/Components/Bookmark';
import { useTypedSelector, useTypedDispatch } from '~/Store';
import {useLocation} from 'react-router-dom';
import {ChangeTheme} from '~/Common/functions';
import * as styles from './styles.module.css';

type Context = {
    title: string,
    description: string,
    accountId: number,
    bookmarkId: number,
    tags: string,
    url: string,
    createdAt: string,
    views: number,
    lastUpdated: string,
    pinned: number,
    archived: number,
}

type Bookmark = {
    id: number,
    account_id: number,
    title: string,
    description: string,
    url: string,
    tags: string,
    created_at: string,
    last_updated: string,
    views: number,
    archived: number,
    pinned: number
}

export const BookmarkContext = createContext<Context | undefined>(undefined);

function DisplayBookmarks() {
    const theme = useTypedSelector(state  => state.theme.theme);
    const dispatch = useTypedDispatch();
    const [displayBookmarks, setDisplayBookmarks] = useState<Array<Bookmark>>([]);
    const allBookmarks = useRef<Array<Bookmark>>([]);
    const archivedBookmarks = useRef<Array<Bookmark>>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const {pathname} = useLocation();
    
    const getAllBookmarks = async () => {
        setLoading(true);
        try{
            const response = await fetch('http://localhost:4000/get_bookmarks', {
                method: 'GET',
                credentials: 'include',
            });

            if(response.status === 200){
                const result = await response.json();
                const pinned : Array<Bookmark> = [];
                const unpinned : Array<Bookmark> = [];
                const pinnedArchived : Array<Bookmark> = [];
                const unPinnedArchived : Array<Bookmark> = [];
                result.forEach((bookmark : Bookmark) => {
                    if(bookmark.pinned && !bookmark.archived)
                        pinned.push(bookmark)
                    else if(!bookmark.pinned && !bookmark.archived)
                        unpinned.push(bookmark);

                    if(bookmark.pinned && bookmark.archived)
                        pinnedArchived.push(bookmark);
                    else if(!bookmark.pinned && bookmark.archived)
                        unPinnedArchived.push(bookmark);
                })
                allBookmarks.current = [...pinned, ...unpinned];
                archivedBookmarks.current = [...pinnedArchived, ...unPinnedArchived];
                if(pathname.includes('archived'))
                    setDisplayBookmarks(archivedBookmarks.current);            
                else 
                    setDisplayBookmarks(allBookmarks.current);     
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
        finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllBookmarks();
    }, [])


    useEffect(() => {
        document.addEventListener('update_bookmarks', getAllBookmarks);
        return () => {
            document.removeEventListener('update_bookmarks', getAllBookmarks)
        }
    }, [pathname])

    useEffect(() => {
        if(pathname.includes('archived'))
            setDisplayBookmarks(archivedBookmarks.current)
        else
            setDisplayBookmarks(allBookmarks.current);
    }, [pathname])


    return(
        <section className={styles.container}>
            <h1 className={ChangeTheme(styles, 'title', theme)}>
                All bookmarks
            </h1>
            <SortButton/>
            {loading ? <LoadingBookmarks/> :
                displayBookmarks.map((bookmark : Bookmark) => {
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
                    const pinned = bookmark.pinned;

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
                                pinned,
                                archived
                                }}>
                            <Bookmark key={`${bookmarkId} ${archived}`}/> 
                        </BookmarkContext.Provider>
                    )
                })
            }
        </section>
    )
}

export default DisplayBookmarks;