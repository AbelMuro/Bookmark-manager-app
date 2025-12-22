export type Bookmark = {
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
    pinned: number,
    last_time_visited: number
}