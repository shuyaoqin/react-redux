import {createStore, combineReducers} from 'redux';
import counterReducer from './counter';
import userReducer from './user';

//3.存入仓库
let store = createStore(combineReducers({
    counter: counterReducer,
    user: userReducer,
}))
export default store;