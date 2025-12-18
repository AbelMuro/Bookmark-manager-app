import PopupMessageBoxReducer from './PopUpMessageReducer';
import ThemeReducer from './ThemeReducer';
import TagsReducer from './TagsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    popup: PopupMessageBoxReducer,
    theme: ThemeReducer,
    tags: TagsReducer
});

export default rootReducer;