import React from 'react';
import DisplayBookmarks from './DisplayBookmarks';
import { useMediaQuery } from '~/Hooks';
import Grid from './Grid';
import HeaderBar from './HeaderBar';
import MobileHeaderBar from './MobileHeaderBar';
import NavigationBar from './NavigationBar';

function Home() {
    const [mobile] = useMediaQuery('(max-width: 930px)');

    return(
        <Grid>
            {!mobile && <NavigationBar/>}
            {mobile ? <MobileHeaderBar/> : <HeaderBar/>}
            <DisplayBookmarks/>
        </Grid>
    )
}

export default Home;