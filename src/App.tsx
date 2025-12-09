import React from 'react';
import ChangeBodyTheme from './Common/Components/ChangeBodyTheme';
import {Provider} from 'react-redux';
import Store from './Store';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Authorization/Login';
import Register from './Pages/Authorization/Register';
import ForgotPassword from './Pages/Authorization/ForgotPassword';
import ResetPassword from './Pages/Authorization/ResetPassword';
import PopupMessageBox from './Common/Components/PopupMessageBox';
import Home from './Pages/Home';
import './styles.css';

/* 
    this is where i left off, i am currently working on the AddBookmark feature of the app

    i am currently on the back end

*/

function App() {

    return(
        <Provider store={Store}>
            <ChangeBodyTheme/>
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