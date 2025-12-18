import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit'

type State = {
    open: boolean,
    message: string
};

const showPopup = createAction('SHOW_POPUP');
const hidePopup = createAction('HIDE_POPUP');
const initialState : State = { open: false, message: '' };

const PopupMessageBoxReducer = createReducer(initialState, (builder) => {       
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
          