import React from 'react';
import { BookmarkContext } from '../DisplayBookmarks';
import Bookmark from '../Bookmark';
import type {Bookmark as BookmarkType} from '~/Common/Types';

type Props = {
    bookmarks : Array<BookmarkType>
}

function ArchivedBookmarks({bookmarks} : Props) {
    return bookmarks.map((bookmark : BookmarkType) => {
            if(!bookmark.archived) return null;

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

export default ArchivedBookmarks;