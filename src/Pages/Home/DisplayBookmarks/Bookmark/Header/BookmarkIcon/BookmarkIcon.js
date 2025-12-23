import React, {useContext, useState, useEffect} from 'react';
import { BookmarkContext } from '~/Pages/Home/DisplayBookmarks';
import * as styles from './styles.module.css';

function BookmarkIcon() {
    const {url} = useContext(BookmarkContext);
    const [image, setImage] = useState(null);

    const getLogo = () => {
        return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}&sz=256`;
    }

    useEffect(() => {
        setImage(getLogo())
    }, [])

    return(<img className={styles.icon} src={image}/>)
}

export default BookmarkIcon