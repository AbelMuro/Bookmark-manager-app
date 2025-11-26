import React from 'react';
import {Provider} from 'react-redux';
import Store from './Store';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Authorization/Login';
import Register from './Authorization/Register';
import ForgotPassword from './Authorization/ForgotPassword';
import ResetPassword from './Authorization/ResetPassword';
import PopupMessageBox from './Common/PopupMessageBox';
import Home from './Home';
import * as styles from './styles.css';

/* 
    this is where i left off, i need to continue working on the tag component within the navigation bar component
*/

function App() {
    return(
        <Provider store={Store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/forgot' element={<ForgotPassword/>}/>
                    <Route path='/reset/:token' element={<ResetPassword/>}/>
                    <Route path='/home' element={<Home/>}/>
                </Routes>
            </BrowserRouter>    
            <PopupMessageBox/>        
        </Provider>
    )
}

export default App;