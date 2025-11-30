import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit'

const changeTheme = createAction('CHANGE_THEME');
const initialState = { theme: 'light'};

const ThemeReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
builder
    .addCase(changeTheme, (state) => {                    
        state.theme = state.theme === 'light' ? 'dark' : 'light';
    })
})

export default ThemeReducer;