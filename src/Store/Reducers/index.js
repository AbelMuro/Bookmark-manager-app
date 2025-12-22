import PopupMessageBoxReducer from './PopUpMessageReducer';
import ThemeReducer from './ThemeReducer';
import TagsReducer from './TagsReducer';
import SortReducer from './SortReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    popup: PopupMessageBoxReducer,
    theme: ThemeReducer,
    tags: TagsReducer,
    sort: SortReducer
});

export default rootReducer;