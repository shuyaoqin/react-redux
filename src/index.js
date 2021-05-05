import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducers} from 'redux';
import './assets/css/common/public.css';
import RouterComponent from './router';
import {Provider} from 'react-redux';
import store from './store/reducers';
import * as serviceWorker from './serviceWorker';

function App(){
    return (
        <React.Fragment>
            <Provider store={store}>
                <RouterComponent></RouterComponent>
            </Provider>
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
