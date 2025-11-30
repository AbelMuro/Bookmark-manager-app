import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit'

const showPopup = createAction('SHOW_POPUP');
const hidePopup = createAction('HIDE_POPUP');
const initialState = { open: false, message: '' };

const PopupMessageBoxReducer = createReducer(initialState, (builder) => {       //builder, as the name implies, is an object that builds the reducer with .addCase
builder
    .addCase(showPopup, (state, action: PayloadAction<string>) => {                    
        state.open = true;
        state.message = action.payload;
    })
    .addCase(hidePopup, (state) => {
        state.open = false;
        state.message = '';
    })
})

export default PopupMessageBoxReducer;
          