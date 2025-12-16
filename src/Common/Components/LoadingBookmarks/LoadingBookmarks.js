import React from 'react';
import { useTypedSelector } from '~/Store';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as styles from './styles.module.css';

function LoadingBookmarks() {
    const theme = useTypedSelector(state => state.theme.theme);

    const handleColor = () => {
        if(theme === 'light')
            return '#f4f4f4';
        else
            return '#001c1c';
    }

    const handleHighlight = () => {
        if(theme === 'light')
            return '#E8F0EF';
        else
            return '#001414';
    }

    return(
        <SkeletonTheme baseColor={handleColor()} highlightColor={handleHighlight()}>
            <Skeleton count={1} className={styles.loading_bookmark}/>
            <Skeleton count={1} className={styles.loading_bookmark}/>
            <Skeleton count={1} className={styles.loading_bookmark}/>
            <Skeleton count={1} className={styles.loading_bookmark}/>
            <Skeleton count={1} className={styles.loading_bookmark}/>
            <Skeleton count={1} className={styles.loading_bookmark}/>
        </SkeletonTheme>
    )
}

export default LoadingBookmarks;