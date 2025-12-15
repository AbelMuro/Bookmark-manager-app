import React from 'react';
import { useTypedSelector } from '~/Store';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import * as styles from './styles.module.css';

function LoadingBookmarks() {
    const theme = useTypedSelector(state => state.theme.theme);

    const handleColor = () => {
        if(theme === 'light')
            return '#FFFFFF';
        else
            return '#004241';
    }

    const handleHighlight = () => {
        if(theme === 'light')
            return '#E8F0EF';
        else
            return '#001414';
    }

    return(
        <SkeletonTheme baseColor={handleColor()} highlightColor={handleHighlight()}>
            <Skeleton count={2}/>
            <Skeleton count={2}/>
            <Skeleton count={2}/>
        </SkeletonTheme>
    )
}

export default LoadingBookmarks;