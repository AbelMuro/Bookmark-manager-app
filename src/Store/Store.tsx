import {configureStore} from '@reduxjs/toolkit';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';
import rootReducer from './Reducers';

const store = configureStore({
    reducer: rootReducer,
});


type RootState = ReturnType<typeof store.getState>;
type TypedDispatch = typeof store.dispatch;
const useTypedDispatch = () => useDispatch<TypedDispatch>();
const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector;

export {useTypedDispatch, useTypedSelector};
export default store;