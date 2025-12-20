import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";

type State = {
    tags: string[]
};

const addTags = createAction('ADD_TAG');
const removeTags = createAction('REMOVE_TAG');
const resetTags = createAction('RESET_TAGS');
const initialState : State = {tags: []};

const tagsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTags, (state, action : PayloadAction<string>) => {
            state.tags.push(action.payload);
        })
        .addCase(removeTags, (state, action) => {
            state.tags = state.tags.filter((tag) => {
                return tag !== action.payload;
            })
        })
        .addCase(resetTags, (state) => {
            state.tags = [];
        })
});

export default tagsReducer;