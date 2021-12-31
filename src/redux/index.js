import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import productReducer from './reducers/productReducer';
import userReducer from './reducers/userReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({productReducer, userReducer, cartReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));
