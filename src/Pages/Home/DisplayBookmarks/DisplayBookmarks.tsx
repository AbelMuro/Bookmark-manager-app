import React, {useEffect, useState, createContext, useRef} from 'react';
import type { Bookmark } from '~/Common/Types';
import AllBookmarks from './AllBookmarks';
import ArchivedBookmarks from './ArchivedBookmarks';
import TaggedBookmarks from './TaggedBookmarks';
import SearchBookmarks from './SearchBookmarks';
import LoadingBookmarks from '~/Common/Components/LoadingBookmarks';
import SortButton from '~/Common/Components/SortButton';
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

export const BookmarkContext = createContext<Context | undefined>(undefined);

function DisplayBookmarks() {
    const theme = useTypedSelector(state  => state.theme.theme);
    const tags = useTypedSelector(state => state.tags.tags);
    const sort = useTypedSelector(state => state.sort.sort);
    const search = useTypedSelector(state => state.search.search);
    const dispatch = useTypedDispatch();
    const [allBookmarks, setAllBookmarks] = useState<Array<Bookmark>>([])
    const [loading, setLoading] = useState<boolean>(false);
    const {pathname} = useLocation();
    const months = useRef<Record<string, number>>({
        'Jan' : 0, 'Feb' : 1, 'Mar' : 2, 'Apr' : 3, 
        'May' : 4, 'Jun' : 5, 'Jul' : 6, 'Aug' : 7, 
        'Sep' : 8, 'Oct' : 9, 'Nov' : 10, 'Dec' : 11} as const);

    const changeTitle = () => {
        if(pathname === '/home/archived')
            return 'Archived bookmarks';
        else if(pathname === '/home/tags')
            return (
                <>
                    Bookmarks tagged:&nbsp;
                    <span>
                        {tags.join(', ')}
                    </span> 
                </>
            )
        else
            return 'All bookmarks';
    }
    
    const getAllBookmarks = async () => {
        setLoading(true);
        try{
            const response = await fetch('https://bookmark-manager-server.netlify.app/get_bookmarks', {
                method: 'GET',
                credentials: 'include',
            });

            if(response.status === 200){
                const result = await response.json();
                const pinnedBookmarks : Array<Bookmark> = [];
                const unPinnedBookmarks : Array<Bookmark> = [];
                result.forEach((bookmark: Bookmark) => {
                    if(bookmark.pinned)
                        pinnedBookmarks.push(bookmark);
                    else if(!bookmark.pinned)
                        unPinnedBookmarks.push(bookmark);
                })
                setAllBookmarks([...pinnedBookmarks, ...unPinnedBookmarks])
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

    useEffect(() => {
        getAllBookmarks();
    }, [])


    useEffect(() => {
        document.addEventListener('update_bookmarks', getAllBookmarks);
        return () => {
            document.removeEventListener('update_bookmarks', getAllBookmarks)
        }
    }, [])


    return(
        <section className={styles.container}>
            <h1 className={ChangeTheme(styles, 'title', theme)}>
                {changeTitle()}
            </h1>
            <SortButton/>
            {loading ? <LoadingBookmarks/> :
                <>
                    {pathname === '/home' && <AllBookmarks bookmarks={allBookmarks}/>}
                    {pathname.includes('archived') && <ArchivedBookmarks bookmarks={allBookmarks}/>}
                    {pathname.includes('tags') && <TaggedBookmarks bookmarks={allBookmarks}/>} 
                    {pathname.includes('search') && <SearchBookmarks bookmarks={allBookmarks}/>}
                </>
            }
        </section>
    )
}

export default DisplayBookmarks;
    