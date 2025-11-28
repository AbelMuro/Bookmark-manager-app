import React from 'react';
import Grid from './Grid';
import HeaderBar from './HeaderBar';
import NavigationBar from './NavigationBar';
import DisplayBookmarks from './DisplayBookmarks';

function Home() {
    return(
        <Grid>
            <NavigationBar/>
            <HeaderBar/>
            <DisplayBookmarks/>
        </Grid>
    )
}

export default Home;