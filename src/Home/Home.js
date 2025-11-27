import React from 'react';
import Grid from './Grid';
import HeaderBar from './HeaderBar';
import NavigationBar from './NavigationBar';

function Home() {
    return(
        <Grid>
            <NavigationBar/>
            <HeaderBar/>
        </Grid>
    )
}

export default Home;