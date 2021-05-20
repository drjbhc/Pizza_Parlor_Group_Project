import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pizzaReducer = (state = [], action) => {
    if (action.type === 'SET_PIZZA_LIST') return action.payload;
    return state;
}
const customerReducer = (state = [], action) => {
    return state;
}
const cartReducer = (state = [], action) => {
    return state;
}


const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        customerReducer,
        cartReducer,
    }),
    applyMiddleware(logger),
);

// Blaine's hack
window.store = storeInstance;

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));