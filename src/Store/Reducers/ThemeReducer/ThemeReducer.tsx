import { createAction, createReducer} from '@reduxjs/toolkit'

type State = {
    theme: string
}

const changeTheme = createAction('CHANGE_THEME');
let initialState : State;

const savedPreference = localStorage.getItem('preferred-theme');
if(savedPreference)
    initialState = { theme: savedPreference};
else{
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    initialState = { theme: prefersDark ? 'dark' : 'light'}    
}


const ThemeReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
builder
    .addCase(changeTheme, (state) => {                    
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('preferred-theme', state.theme);
    })
})

export default ThemeReducer;