import React, {useState, useEffect} from 'react';
import { useTypedSelector } from '~/Store';
import { BookmarkContext } from '../DisplayBookmarks';
import Bookmark from '../Bookmark';
import type {Bookmark as BookmarkType} from '~/Common/Types';

type Props = {
    bookmarks : Array<BookmarkType>
}
function TaggedBookmarks({bookmarks} : Props) {
    const tags = useTypedSelector(state => state.tags.tags);
    const [taggedBookmarks, setTaggedBookmarks] = useState<Array<BookmarkType>>([]);

    useEffect(() => {
        const tagged : Array<BookmarkType> = []
        bookmarks.forEach((bookmark: BookmarkType) => {
            const result = bookmark.tags.split(',').some((tag) => {
                return tags.includes(tag)
            })

            if(result)
                tagged.push(bookmark)

        })
        setTaggedBookmarks(tagged)  
    }, [tags, bookmarks])
    
    return taggedBookmarks.map((bookmark : BookmarkType) => {

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
export default TaggedBookmarks;