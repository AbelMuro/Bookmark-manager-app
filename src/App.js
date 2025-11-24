import React from 'react';
import {Provider} from 'react-redux';
import Store from './Store';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Authorization/Login';
import Register from './Authorization/Register';
import ForgotPassword from './Authorization/ForgotPassword';
import ResetPassword from './Authorization/ResetPassword';
import PopupMessageBox from './Common/PopupMessageBox';
import * as styles from './styles.css';

/* 
    this is where i left off, i was in the back end
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
                </Routes>
            </BrowserRouter>    
            <PopupMessageBox/>        
        </Provider>
    )
}

export default App;