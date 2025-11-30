import PopupMessageBoxReducer from './PopUpMessageReducer';
import ThemeReducer from './ThemeReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    popup: PopupMessageBoxReducer,
    theme: ThemeReducer
});

export default rootReducer;