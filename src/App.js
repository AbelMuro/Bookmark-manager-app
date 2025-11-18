import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Authorization/Login';
import * as styles from './styles.css';

/* 
this is where i left off, i need to continue implementing the framer-motion feature on the <Login/> component
*/

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;