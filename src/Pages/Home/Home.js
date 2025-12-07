import React from 'react';
import { useMediaQuery } from '~/Hooks';
import Grid from './Grid';
import HeaderBar from './HeaderBar';
import MobileHeaderBar from './MobileHeaderBar';
import NavigationBar from './NavigationBar';
import DisplayBookmarks from './DisplayBookmarks';

function Home() {
    const [mobile] = useMediaQuery('(max-width: 930px)');

    return(
        <Grid>
            <NavigationBar/>
            {mobile ? <MobileHeaderBar/> : <HeaderBar/>}
            <DisplayBookmarks/>
        </Grid>
    )
}

export default Home;