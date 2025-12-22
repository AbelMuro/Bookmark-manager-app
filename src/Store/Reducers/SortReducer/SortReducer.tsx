import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit'

type State = {
    sort: string
};

const sort_option = createAction('SORT_OPTION');
const initialState : State = { sort: '' };

const SortReducer = createReducer(initialState, (builder) => {       
builder
    .addCase(sort_option, (state, action: PayloadAction<string>) => {                    
        state.sort = action.payload;
    })
})

export default SortReducer;