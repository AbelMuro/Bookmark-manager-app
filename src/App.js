import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Authorization/Login';
import * as styles from './styles.css';

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