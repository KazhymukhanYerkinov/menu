import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import dataReducer from './data-reducer';
import { reducer as formReducer } from 'redux-form';



let reducer = combineReducers({
    dataPage: dataReducer,
    form: formReducer,
});

let store = createStore(reducer, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;