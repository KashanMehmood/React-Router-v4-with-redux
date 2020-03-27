import rootReducer from './reducer';
import {createStore, applyMiddleware} from 'redux';
// Middleware library use at the time of dispatch
import thunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk)
);

export default store;