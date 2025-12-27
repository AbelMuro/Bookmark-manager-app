import React from 'react';
import ChangeBodyTheme from './Common/Components/ChangeBodyTheme';
import {Provider} from 'react-redux';
import Store from './Store';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Pages/Authorization/Login';
import Register from './Pages/Authorization/Register';
import ForgotPassword from './Pages/Authorization/ForgotPassword';
import ResetPassword from './Pages/Authorization/ResetPassword';
import Toast from './Common/Components/Toast';
import Home from './Pages/Home';
import './styles.css';

/* 
    i finished deploying the front end and back end for this app

    im just testing everything at this point

    i already tested the authorization and the addBookmark feature.

    i also want to add a few more features to the front end,
    when there is no bookmarks, there should be a message

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
                    <Route path='/home/*' element={<Home/>}/>
                </Routes>
            </BrowserRouter>    
            <Toast/>        
        </Provider>
    )
}

export default App;