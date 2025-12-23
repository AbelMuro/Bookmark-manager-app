import ToastReducer from './ToastReducer';
import ThemeReducer from './ThemeReducer';
import TagsReducer from './TagsReducer';
import SortReducer from './SortReducer';
import SearchReducer from './SearchReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    toast: ToastReducer,
    theme: ThemeReducer,
    tags: TagsReducer,
    sort: SortReducer,
    search: SearchReducer,
});

export default rootReducer;