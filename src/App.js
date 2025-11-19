import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Authorization/Login';
import Register from './Authorization/Register';
import ForgotPassword from './Authorization/ForgotPassword';
import ResetPassword from './Authorization/ResetPassword';
import * as styles from './styles.css';

/* 
    this is where i left off, i need to finish the ResetPassword component
*/

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/forgot' element={<ForgotPassword/>}/>
                <Route path='/reset' element={<ResetPassword/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;