import React from 'react';
import { Outlet } from 'react-router-dom';
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
            <Outlet/>
        </Grid>
    )
}

export default Home;