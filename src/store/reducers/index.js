import {createStore, combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './counter';
import userReducer from './user';

//3.存入仓库
let store = createStore(combineReducers({
    counter: counterReducer,
    user: userReducer,
}),applyMiddleware(thunk))
export default store;