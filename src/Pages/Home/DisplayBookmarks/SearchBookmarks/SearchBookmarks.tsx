import React, {useState, useEffect, useRef} from 'react';
import { useTypedSelector } from '~/Store';
import { BookmarkContext } from '../DisplayBookmarks';
import Bookmark from '../Bookmark';
import type {Bookmark as BookmarkType} from '~/Common/Types';

type Props = {
    bookmarks : Array<BookmarkType>
}

function SearchBookmarks({bookmarks} : Props) {
    const sort = useTypedSelector(state => state.sort.sort);
    const search = useTypedSelector(state => state.search.search);
    const [searchBookmarks, setSearchBookmarks] = useState<Array<BookmarkType>>([]);
    const [allBookmarks, setAllBookmarks] = useState<Array<BookmarkType>>([]);
    const months = useRef<Record<string, number>>({
        'Jan' : 0, 'Feb' : 1, 'Mar' : 2, 'Apr' : 3, 
        'May' : 4, 'Jun' : 5, 'Jul' : 6, 'Aug' : 7, 
        'Sep' : 8, 'Oct' : 9, 'Nov' : 10, 'Dec' : 11} as const);

    useEffect(() => {
        if(!search.length) setSearchBookmarks([]);
        setSearchBookmarks(bookmarks.filter((bookmark) => {
            const title = bookmark.title.toLowerCase();
            return title.startsWith(search.toLowerCase());
        }))
    }, [search, bookmarks]);

     useEffect(() => {
        if(sort === 'recently added'){
            const allBookmarks = [...searchBookmarks];
            allBookmarks.sort((a, b) => {
                let created_at : string = a.created_at;
                let day : number = Number(created_at.split(' ')[0]);
                let month : string = created_at.split(' ')[1];
                let date_created : Date = new Date(2025, months.current[month], day);
                let milliseconds_a : number = date_created.getTime();

                created_at = b.created_at;
                day = Number(created_at.split(' ')[0]);
                month = created_at.split(' ')[1];
                date_created = new Date(2025, months.current[month], day);
                let milliseconds_b : number = date_created.getTime();

                if(milliseconds_a > milliseconds_b)
                    return 1;
                else 
                    return -1;
            })
            setAllBookmarks(allBookmarks);
        }
        else if(sort === 'recently visited'){
            const allBookmarks = [...searchBookmarks];
            allBookmarks.sort((a, b) => {
                const lastTimeVisitedA : number = a.last_time_visited;
                const lastTimeVisitedB : number = b.last_time_visited;

                if(lastTimeVisitedA < lastTimeVisitedB)
                    return 1;
                else    
                    return -1;
                
            });
            setAllBookmarks(allBookmarks);
        }
        else if(sort === 'most visited'){
            const allBookmarks = [...searchBookmarks];
            allBookmarks.sort((a, b) => {
                const viewsA = a.views;
                const viewsB = b.views;

                if(viewsA < viewsB)
                    return 1;
                else
                    return -1;
            })
            setAllBookmarks(allBookmarks);
        }
    }, [sort, searchBookmarks]);
    

    return allBookmarks.map((bookmark : BookmarkType) => {

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
                <BookmarkContext.Provider 
                    key={bookmarkId}
                    value={{
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
                    <Bookmark/> 
                </BookmarkContext.Provider>
            )
        })
}

export default SearchBookmarks;