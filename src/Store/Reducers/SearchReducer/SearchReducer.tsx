import {createReducer, createAction, PayloadAction} from '@reduxjs/toolkit';

type State = {
    search: string
}

const updateSearch = createAction('UPDATE_SEARCH');
const initialState : State = {
    search: ''
}

const searchReducer = createReducer(initialState, builder => {
    builder
        .addCase(updateSearch, (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        })
})

export default searchReducer;