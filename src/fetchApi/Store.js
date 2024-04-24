import { legacy_createStore as createStore , combineReducers, applyMiddleware } from 'redux';
import { thunk } from "redux-thunk";
import { fetchReducer } from './Reducer';

const rootReducer = combineReducers({fetchReducer:fetchReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));

