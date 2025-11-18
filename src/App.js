import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Authorization/Login';
import Register from './Authorization/Register';
import * as styles from './styles.css';

/* 
    this is where i left off, i need to crete the password component for the Register page
*/

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;