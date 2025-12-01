import { createAction, createReducer} from '@reduxjs/toolkit'

const changeTheme = createAction('CHANGE_THEME');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialState = { theme: prefersDark ? 'dark' : 'light'};

const ThemeReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
builder
    .addCase(changeTheme, (state) => {                    
        state.theme = state.theme === 'light' ? 'dark' : 'light';
    })
})

export default ThemeReducer;