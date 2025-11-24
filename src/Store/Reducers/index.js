import PopupMessageBoxReducer from './PopUpMessageReducer.tsx';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    popup: PopupMessageBoxReducer,
});

export default rootReducer;